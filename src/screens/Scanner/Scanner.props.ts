import { CameraType, PermissionResponse } from "expo-camera";

export interface ScannerGeneratedProps {
  type: CameraType.back | CameraType.front;
  setType: React.Dispatch<React.SetStateAction<CameraType>>;
  permission: PermissionResponse | null;
  requestPermission: () => Promise<PermissionResponse>;
  permissionStatus: string;
  setPermissionStatus: React.Dispatch<React.SetStateAction<string>>;
  scanned: boolean;
  setScanned: React.Dispatch<React.SetStateAction<boolean>>;
  handleRequestPermission: () => Promise<void>;
  handleScan: (event: { data: string }) => void;
  toggleCameraType: () => void;
}
