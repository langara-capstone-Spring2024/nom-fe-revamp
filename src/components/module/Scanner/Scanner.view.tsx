import { View, Linking, StatusBar, Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Scanner.style";
import Button from "../../base/Button";
import { ScannerProps } from "./Scanner.props";
import { BarCodeScanningResult, Camera, FlashMode } from "expo-camera";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import Typography from "../../base/Typography";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScannerError,
  ScannerLeftBottom,
  ScannerLeftTop,
  ScannerPermission,
  ScannerRightBottom,
  ScannerRightTop,
  ScannerSuccess,
} from "../../../svgs";

const Scanner = (props: ScannerProps) => {
  const {
    onChange,
    onClose,
    onSuccess = () => null,
    onError = () => null,
  } = props;

  const navigation = useNavigation();
  const viewRef = useRef<View | null>(null);
  const ref = useRef<Camera | null>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "busy" | "success" | "error">(
    "idle"
  );

  const bias = 50;
  const height = Dimensions.get("window").height;
  const [x1, setX1] = useState<number | undefined>(undefined);
  const [x2, setX2] = useState<number | undefined>(undefined);

  const handleAccept = async () => {
    const { status } = await requestPermission();

    if (status === "denied") {
      Linking.openSettings();
    }
  };

  const handleDecline = () => {
    onClose();
  };

  const handleScan = (result: BarCodeScanningResult) => {
    if (
      status === "idle" &&
      x1 &&
      x2 &&
      x1 < result.bounds.origin.x &&
      result.bounds.origin.x + result.bounds.size.width < x2 &&
      1 / 6 < result.bounds.origin.y &&
      result.bounds.origin.y + result.bounds.size.height < 5 / 6
    ) {
      setStatus("busy");
      setResult(result.data);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleSuccess = () => {
    onSuccess();
  };

  const handleError = () => {
    setStatus("idle");
    setResult("");
    onError();
  };

  const handleLumos = () => {
    setIsFlashing(true);
  };

  const handleNox = () => {
    setIsFlashing(false);
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false, useHeaderHeight: 1 });

    return () => {
      navigation.setOptions({ headerShown: undefined });
    };
  }, []);

  useEffect(() => {
    if (result) {
      if (onChange(result)) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }
  }, [result]);

  useEffect(() => {
    if (ref.current) {
      if (status === "idle") {
        ref.current.resumePreview();
      } else {
        ref.current.pausePreview();
        setIsFlashing(false);
      }
    }
  }, [status]);

  const handleLayout = () => {
    if (viewRef.current) {
      viewRef.current.measure((_, y, __, h) => {
        setX1((y + bias) / height);
        setX2((y - bias / 2 + h) / height);
      });
    }
  };

  return (
    <View style={styles.container}>
      {permission ? (
        permission.granted ? (
          <>
            <StatusBar hidden={true} />
            <Camera
              ref={ref}
              flashMode={isFlashing ? FlashMode.torch : FlashMode.off}
              barCodeScannerSettings={{
                barCodeTypes: ["org.iso.QRCode"],
              }}
              onBarCodeScanned={handleScan}
              style={styles.camera}
            />
            {status === "idle" || status === "busy" ? (
              <View style={styles.overlayContainer}>
                <View style={styles.topOverlay}>
                  {isFlashing ? (
                    <Button
                      text={<Ionicons name="flash-off" size={24} />}
                      onPress={handleNox}
                    />
                  ) : (
                    <Button
                      text={<Ionicons name="flash" size={24} />}
                      onPress={handleLumos}
                    />
                  )}
                </View>
                <View
                  ref={viewRef}
                  onLayout={handleLayout}
                  style={{ zIndex: 1000 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View style={styles.leftOverlay}></View>
                    <View style={styles.lense}>
                      <SvgXml
                        xml={ScannerLeftTop}
                        opacity={0.75}
                        style={styles.leftTopCorner}
                      />
                      <SvgXml
                        xml={ScannerRightTop}
                        opacity={0.75}
                        style={styles.rightTopCorner}
                      />
                      <SvgXml
                        xml={ScannerRightBottom}
                        opacity={0.75}
                        style={styles.rightBottomCorner}
                      />
                      <SvgXml
                        xml={ScannerLeftBottom}
                        opacity={0.75}
                        style={styles.leftBottomCorner}
                      />
                      <View style={[styles.frame]}></View>
                    </View>
                    <View style={styles.rightOverlay}></View>
                  </View>
                </View>
                <View style={styles.bottomOverlay}>
                  <Typography color="white-strong" alignment="center">
                    Point your camera at the QR code of the customer’s coupon
                  </Typography>
                  <Button text="Close" onPress={handleClose} takeFullWidth />
                </View>
              </View>
            ) : status === "error" ? (
              <View
                style={[
                  styles.overlayContainer,
                  {
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                  },
                ]}
              >
                <View style={styles.modalContainer}>
                  <SvgXml xml={ScannerError} />
                  <Typography variant="title5" alignment="center">
                    Invalid QR Code
                  </Typography>
                  <Typography alignment="center">
                    Sorry, we don't recognize the code you scanned
                  </Typography>
                  <Button
                    text="Try Again"
                    onPress={handleError}
                    takeFullWidth
                  />
                </View>
              </View>
            ) : status === "success" ? (
              <View
                style={[
                  styles.overlayContainer,
                  {
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                  },
                ]}
              >
                <View style={styles.modalContainer}>
                  <SvgXml xml={ScannerSuccess} />
                  <Typography variant="title5" alignment="center">
                    Success!
                  </Typography>
                  <Typography alignment="center">
                    Customer's coupon has been redeemed successfully
                  </Typography>
                  <Button text="Home" onPress={handleSuccess} takeFullWidth />
                </View>
              </View>
            ) : (
              <></>
            )}
          </>
        ) : (
          <View
            style={[
              styles.overlayContainer,
              {
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            ]}
          >
            <View style={styles.modalContainer}>
              <SvgXml xml={ScannerPermission} />
              <Typography variant="title5" alignment="center">
                nom! would like to access the camera
              </Typography>
              <Typography alignment="center">
                Camera permission is required to use the QR code scanner
              </Typography>
              <View>
                <Button text="Accept" onPress={handleAccept} takeFullWidth />
                <Button
                  text="Decline"
                  variant="ghost"
                  onPress={handleDecline}
                  takeFullWidth
                />
              </View>
            </View>
          </View>
        )
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Scanner;
