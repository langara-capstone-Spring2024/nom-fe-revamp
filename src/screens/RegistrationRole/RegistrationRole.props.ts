import { Option } from "../../types";

export interface RegistrationRoleGeneratedProps {
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  handleContinue: () => void;
}
