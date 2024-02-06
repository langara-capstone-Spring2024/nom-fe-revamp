export interface TokenProps {
  token: string | null;
  firstName: string;
  lastName: string;
  imageUrl: string;
}
export interface AccessTokenProps {
  accessToken: string | null;
  data?: {
    accessToken?: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
}

export interface LoginProps {
  email: string;
  password: string;
}
