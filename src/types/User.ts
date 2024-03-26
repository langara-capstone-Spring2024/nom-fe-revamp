export interface UserToken {
  accessToken: string;
  refreshToken: string;
  firstName: string;
  lastName: string;
  merchantId: string;
  consumerId: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}
