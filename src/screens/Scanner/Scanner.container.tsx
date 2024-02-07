import ScannerView from "./Scanner.view";
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect } from "react";
import { Linking } from "react-native";

const Scanner = (): JSX.Element => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionStatus, setPermissionStatus] = useState(
    permission?.status || "undetermined"
  );
  const [scanned, setScanned] = useState(false);

  // for flipping camera
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  // for requestiong to access camera
  const handleRequestPermission = async () => {
    const { status } = await requestPermission();
    setPermissionStatus(status);

    if (status === "denied") {
      Linking.openSettings();
    }
  };

  // show the data scanned, we can replace alert later on
  const handleScan = ({ data }: { data: string }) => {
    setScanned(true);
    alert(`${data} has been scanned!`);
  };

  useEffect(() => {
    if (permission) {
      setPermissionStatus(permission.status);
    }
  }, [permission]);

  const generatedProps = {
    type,
    setType,
    permission,
    requestPermission,
    permissionStatus,
    setPermissionStatus,
    scanned,
    setScanned,
    handleRequestPermission,
    handleScan,
    toggleCameraType,
  };
  return <ScannerView {...generatedProps} />;
};

export default Scanner;
