import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { apiClient } from "../../client";
import { QUERY_KEYS } from "../../../config/query-keys";
import { RNQueryClient } from "../query-client";
import { LoginPayload, UserToken } from "../../../types";
import { AuthService } from "../../AuthService";
