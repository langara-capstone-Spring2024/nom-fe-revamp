import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { setCredentials } from "../../features/auth/authSlice";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BACKEND_URL
    : "http://localhost:3500";

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    // this is the accessToken from the store and then we pass it to the Authorization Headers for all requests automatically
    const token = state.auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // console.log(args); // request url, method, body
  // console.log(api); // signal, dispatch, getState()

  let result = await baseQuery(args, api, extraOptions);
  // If you want, handle other status codes, too
  if (result?.error?.status === 403 || result?.error?.status === 401) {
    console.log("sending refresh token");

    // send refresh token to get new access token
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(
        setCredentials({
          ...refreshResult.data,
        })
      );
      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data = "Your login has expired.";
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    // TAG_TYPE.TODO,
    // TAG_TYPE.GETCROP,
    // TAG_TYPE.CROP,
    // TAG_TYPE.PREDICT,
    // TAG_TYPE.YIELD,
  ],
  endpoints: (builder) => ({}),
});
