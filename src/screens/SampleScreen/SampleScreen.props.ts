import { Merchant } from "../../types";

export interface SampleScreenGeneratedProps {
  isVisible: boolean;
  isErrorOnMerchants: boolean;
  merchants?: Merchant[];
  onLogout: () => Promise<void>;
  handleToggleModal: () => void;
}
