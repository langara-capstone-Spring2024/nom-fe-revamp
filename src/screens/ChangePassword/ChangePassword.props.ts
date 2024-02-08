export interface ChangePasswordGeneratedProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmNewPassword: string;
  setConfirmNewPassword: React.Dispatch<React.SetStateAction<string>>;
  changePasswordMethod: () => Promise<void>;
}
