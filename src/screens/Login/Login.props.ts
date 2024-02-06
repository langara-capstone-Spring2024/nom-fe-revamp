export interface LoginGeneratedProps {
  email: string;
  password: string;
  onEmailChange: (text: React.SetStateAction<string>) => void;
  onPasswordChange: (text: React.SetStateAction<string>) => void;
  onLogin: () => Promise<void>;
}
