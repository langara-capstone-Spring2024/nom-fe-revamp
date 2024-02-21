import { View, Text, TouchableOpacity, Linking } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Scanner.style";
import Button from "../../base/Button";
import { ScannerProps } from "./Scanner.props";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";

const Scanner = (props: ScannerProps) => {
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

  return (
    <View style={styles.container}>
      {!permission ? (
        <Text>Loading...</Text>
      ) : !permission.granted ? (
        <View style={styles.permissionContainer}>
          <Text style={{ textAlign: "center" }}>
            Please give permission to access camera
          </Text>
          <Button
            variant="ghost"
            buttonSize="sm"
            text="Request Camera Permission"
            onPress={handleRequestPermission}
          />
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          onBarCodeScanned={scanned ? undefined : handleScan}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonCamera}
              onPress={toggleCameraType}
            >
              <MaterialIcons name="flip-camera-ios" size={54} color="white" />
            </TouchableOpacity>
          </View>
          {scanned && (
            <Button
              variant="ghost"
              buttonSize="sm"
              text="Tap to Scan Again"
              style={{
                color: "white",
                fontSize: 24,
                width: "100%",
                textAlign: "center",
              }}
              onPress={() => setScanned(false)}
            />
          )}
        </Camera>
      )}
    </View>
  );
};

export default Scanner;
