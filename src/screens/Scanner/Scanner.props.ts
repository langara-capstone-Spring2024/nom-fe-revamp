export interface ScannerGeneratedProps {
  handleChange: (result: string) => boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  consumerId?: string;
  merchantId?: string;
  discountId?: string;
}
