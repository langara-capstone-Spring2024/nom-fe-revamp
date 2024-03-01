export interface ScannerProps {
  setResult: (result: string) => void;
  isError: boolean;
  setIsError: (isError: boolean) => void;
  onClose: () => void;
}
