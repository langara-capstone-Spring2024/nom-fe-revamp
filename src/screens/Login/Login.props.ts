export interface LoginGeneratedProps {
  email: string;
  password: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onLogin: () => Promise<void>;
}
