export interface UserToken {
  accessToken: string;
  refreshToken: string;
  firstName: string;
  lastName: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
