export interface ScannerProps {
  onChange: (result: string) => boolean;
  onClose: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}
