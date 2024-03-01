import { View, Text, Linking, StatusBar, Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Scanner.style";
import Button from "../../base/Button";
import { ScannerProps } from "./Scanner.props";
import { BarCodeScanningResult, Camera } from "expo-camera";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import Typography from "../../base/Typography";

const Scanner = (props: ScannerProps) => {
  const { setResult, isError, setIsError, onClose } = props;

  const navigation = useNavigation();
  const ref = useRef<Camera | null>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isReady, setIsReady] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  const length = (width * 2) / 3;
  const x = (height - length) / 3 / height - 20 / height;

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
      x < result.bounds.origin.x &&
      result.bounds.origin.x + result.bounds.size.width < x + length / height &&
      1 / 6 < result.bounds.origin.y &&
      result.bounds.origin.y + result.bounds.size.height < 5 / 6 &&
      result.bounds.size.width < length &&
      result.bounds.size.height < length
    ) {
      if (ref.current) {
        ref.current.pausePreview();
        setIsAvailable(false);
        setResult(result.data);
      }
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleRetry = () => {
    if (ref.current) {
      ref.current.resumePreview();
      setIsAvailable(true);
      setIsError(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });

    return () => {
      navigation.setOptions({ headerShown: undefined });
    };
  }, []);

  useEffect(() => {
    if (isReady && isError && ref.current) {
      ref.current.pausePreview();
    }
  }, [isReady, isError]);

  return (
    <View style={styles.container}>
      {permission ? (
        permission.granted ? (
          <>
            <StatusBar hidden={true} />
            <Camera
              ref={ref}
              barCodeScannerSettings={{
                barCodeTypes: ["org.iso.QRCode"],
              }}
              onBarCodeScanned={isAvailable ? handleScan : undefined}
              onCameraReady={() => setIsReady(true)}
              style={styles.camera}
            />
            {isError ? (
              <View
                style={[
                  styles.overlayContainer,
                  {
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                ]}
              >
                <View style={styles.modalContainer}>
                  <Svg width="98" height="98" viewBox="0 0 98 98" fill="none">
                    <Path
                      d="M32.6667 85.7502H16.3333C15.2504 85.7502 14.2117 85.3199 13.446 84.5542C12.6802 83.7884 12.25 82.7498 12.25 81.6668V65.3335C12.25 64.2505 11.8198 63.2119 11.054 62.4461C10.2882 61.6804 9.24963 61.2502 8.16666 61.2502C7.08369 61.2502 6.04508 61.6804 5.27931 62.4461C4.51354 63.2119 4.08333 64.2505 4.08333 65.3335V81.6668C4.08333 84.9157 5.37395 88.0316 7.67127 90.3289C9.96859 92.6262 13.0844 93.9168 16.3333 93.9168H32.6667C33.7496 93.9168 34.7882 93.4866 35.554 92.7208C36.3198 91.9551 36.75 90.9165 36.75 89.8335C36.75 88.7505 36.3198 87.7119 35.554 86.9461C34.7882 86.1804 33.7496 85.7502 32.6667 85.7502ZM89.8333 61.2502C88.7504 61.2502 87.7117 61.6804 86.946 62.4461C86.1802 63.2119 85.75 64.2505 85.75 65.3335V81.6668C85.75 82.7498 85.3198 83.7884 84.554 84.5542C83.7882 85.3199 82.7496 85.7502 81.6667 85.7502H65.3333C64.2504 85.7502 63.2117 86.1804 62.446 86.9461C61.6802 87.7119 61.25 88.7505 61.25 89.8335C61.25 90.9165 61.6802 91.9551 62.446 92.7208C63.2117 93.4866 64.2504 93.9168 65.3333 93.9168H81.6667C84.9156 93.9168 88.0314 92.6262 90.3287 90.3289C92.626 88.0316 93.9167 84.9157 93.9167 81.6668V65.3335C93.9167 64.2505 93.4865 63.2119 92.7207 62.4461C91.9549 61.6804 90.9163 61.2502 89.8333 61.2502ZM81.6667 4.0835H65.3333C64.2504 4.0835 63.2117 4.5137 62.446 5.27948C61.6802 6.04525 61.25 7.08386 61.25 8.16683C61.25 9.2498 61.6802 10.2884 62.446 11.0542C63.2117 11.82 64.2504 12.2502 65.3333 12.2502H81.6667C82.7496 12.2502 83.7882 12.6804 84.554 13.4461C85.3198 14.2119 85.75 15.2505 85.75 16.3335V32.6668C85.75 33.7498 86.1802 34.7884 86.946 35.5542C87.7117 36.32 88.7504 36.7502 89.8333 36.7502C90.9163 36.7502 91.9549 36.32 92.7207 35.5542C93.4865 34.7884 93.9167 33.7498 93.9167 32.6668V16.3335C93.9167 13.0846 92.626 9.96876 90.3287 7.67144C88.0314 5.37412 84.9156 4.0835 81.6667 4.0835ZM8.16666 36.7502C9.24963 36.7502 10.2882 36.32 11.054 35.5542C11.8198 34.7884 12.25 33.7498 12.25 32.6668V16.3335C12.25 15.2505 12.6802 14.2119 13.446 13.4461C14.2117 12.6804 15.2504 12.2502 16.3333 12.2502H32.6667C33.7496 12.2502 34.7882 11.82 35.554 11.0542C36.3198 10.2884 36.75 9.2498 36.75 8.16683C36.75 7.08386 36.3198 6.04525 35.554 5.27948C34.7882 4.5137 33.7496 4.0835 32.6667 4.0835H16.3333C13.0844 4.0835 9.96859 5.37412 7.67127 7.67144C5.37395 9.96876 4.08333 13.0846 4.08333 16.3335V32.6668C4.08333 33.7498 4.51354 34.7884 5.27931 35.5542C6.04508 36.32 7.08369 36.7502 8.16666 36.7502Z"
                      fill="black"
                    />
                    <Path
                      d="M29.1996 44.9995C28.6161 44.9995 28.0565 44.7888 27.6439 44.4137C27.2314 44.0387 26.9996 43.5299 26.9996 42.9995C26.9996 42.4691 27.2314 41.9604 27.6439 41.5853C28.0565 41.2102 28.6161 40.9995 29.1996 40.9995M29.1996 44.9995C29.7831 44.9995 30.3426 44.7888 30.7552 44.4137C31.1678 44.0387 31.3996 43.5299 31.3996 42.9995C31.3996 42.4691 31.1678 41.9604 30.7552 41.5853C30.3426 41.2102 29.7831 40.9995 29.1996 40.9995M68.7996 44.9995C68.2161 44.9995 67.6565 44.7888 67.2439 44.4137C66.8314 44.0387 66.5996 43.5299 66.5996 42.9995C66.5996 42.4691 66.8314 41.9604 67.2439 41.5853C67.6565 41.2102 68.2161 40.9995 68.7996 40.9995M68.7996 44.9995C69.3831 44.9995 69.9426 44.7888 70.3552 44.4137C70.7678 44.0387 70.9996 43.5299 70.9996 42.9995C70.9996 42.4691 70.7678 41.9604 70.3552 41.5853C69.9426 41.2102 69.3831 40.9995 68.7996 40.9995"
                      fill="black"
                    />
                    <Path
                      d="M29.1996 44.9995C28.6161 44.9995 28.0565 44.7888 27.6439 44.4137C27.2314 44.0387 26.9996 43.5299 26.9996 42.9995C26.9996 42.4691 27.2314 41.9604 27.6439 41.5853C28.0565 41.2102 28.6161 40.9995 29.1996 40.9995C29.7831 40.9995 30.3426 41.2102 30.7552 41.5853C31.1678 41.9604 31.3996 42.4691 31.3996 42.9995C31.3996 43.5299 31.1678 44.0387 30.7552 44.4137C30.3426 44.7888 29.7831 44.9995 29.1996 44.9995ZM68.7996 44.9995C68.2161 44.9995 67.6565 44.7888 67.2439 44.4137C66.8314 44.0387 66.5996 43.5299 66.5996 42.9995C66.5996 42.4691 66.8314 41.9604 67.2439 41.5853C67.6565 41.2102 68.2161 40.9995 68.7996 40.9995C69.3831 40.9995 69.9426 41.2102 70.3552 41.5853C70.7678 41.9604 70.9996 42.4691 70.9996 42.9995C70.9996 43.5299 70.7678 44.0387 70.3552 44.4137C69.9426 44.7888 69.3831 44.9995 68.7996 44.9995Z"
                      stroke="black"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M38.2857 59.7139C39.8857 54.6139 45.9643 51.4996 52.0357 52.9139C53.773 53.3355 55.3808 54.1755 56.7192 55.3607C58.0575 56.5459 59.0857 58.0404 59.7143 59.7139"
                      stroke="black"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                  <Typography variant="title5">Invalid QR Code</Typography>
                  <Typography alignment="center">
                    Sorry, we don't recognize the code you scanned
                  </Typography>
                  <Button
                    text="Try Again"
                    takeFullWidth
                    onPress={handleRetry}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.overlayContainer}>
                <View style={styles.topOverlay}></View>
                <View style={{ zIndex: 1000 }}>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View style={styles.leftOverlay}></View>
                    <View style={styles.lense}>
                      <Svg
                        height="50"
                        width="50"
                        fill="black"
                        opacity={0.75}
                        style={styles.leftTopCorner}
                      >
                        <Path d="M 0 50 L 0 0 L 50 0 A 50 50 0 0 0 0 50" />
                      </Svg>
                      <Svg
                        height="50"
                        width="50"
                        fill="black"
                        opacity={0.75}
                        style={styles.rightTopCorner}
                      >
                        <Path d="M 0 0 L 50 0 L 50 50 A 50 50 0 0 0 0 0" />
                      </Svg>
                      <Svg
                        height="50"
                        width="50"
                        fill="black"
                        opacity={0.75}
                        style={styles.rightBottomCorner}
                      >
                        <Path d="M 0 50 L 50 50 L 50 0 A 50 50 0 0 1 0 50" />
                      </Svg>
                      <Svg
                        height="50"
                        width="50"
                        fill="black"
                        opacity={0.75}
                        style={styles.leftBottomCorner}
                      >
                        <Path d="M 0 0 L 0 50 L 50 50 A 50 50 0 0 1 0 0" />
                      </Svg>
                      <View
                        style={[
                          styles.frame,
                          { borderColor: isAvailable ? "white" : "green" },
                        ]}
                      ></View>
                    </View>
                    <View style={styles.rightOverlay}></View>
                  </View>
                </View>
                <View style={styles.bottomOverlay}>
                  <Typography color="white-strong" alignment="center">
                    Point your camera at the QR code of the customer’s coupon
                  </Typography>
                  <Button text="Close" onPress={handleClose} />
                </View>
              </View>
            )}
          </>
        ) : (
          <View
            style={[
              styles.overlayContainer,
              {
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            ]}
          >
            <View style={styles.modalContainer}>
              <Svg width="98" height="98" viewBox="0 0 98 98" fill="none">
                <Path
                  d="M32.6667 85.7502H16.3333C15.2504 85.7502 14.2117 85.3199 13.446 84.5542C12.6802 83.7884 12.25 82.7498 12.25 81.6668V65.3335C12.25 64.2505 11.8198 63.2119 11.054 62.4461C10.2882 61.6804 9.24963 61.2502 8.16666 61.2502C7.08369 61.2502 6.04508 61.6804 5.27931 62.4461C4.51354 63.2119 4.08333 64.2505 4.08333 65.3335V81.6668C4.08333 84.9157 5.37395 88.0316 7.67127 90.3289C9.96859 92.6262 13.0844 93.9168 16.3333 93.9168H32.6667C33.7496 93.9168 34.7882 93.4866 35.554 92.7208C36.3198 91.9551 36.75 90.9165 36.75 89.8335C36.75 88.7505 36.3198 87.7119 35.554 86.9461C34.7882 86.1804 33.7496 85.7502 32.6667 85.7502ZM89.8333 61.2502C88.7504 61.2502 87.7117 61.6804 86.946 62.4461C86.1802 63.2119 85.75 64.2505 85.75 65.3335V81.6668C85.75 82.7498 85.3198 83.7884 84.554 84.5542C83.7882 85.3199 82.7496 85.7502 81.6667 85.7502H65.3333C64.2504 85.7502 63.2117 86.1804 62.446 86.9461C61.6802 87.7119 61.25 88.7505 61.25 89.8335C61.25 90.9165 61.6802 91.9551 62.446 92.7208C63.2117 93.4866 64.2504 93.9168 65.3333 93.9168H81.6667C84.9156 93.9168 88.0314 92.6262 90.3287 90.3289C92.626 88.0316 93.9167 84.9157 93.9167 81.6668V65.3335C93.9167 64.2505 93.4865 63.2119 92.7207 62.4461C91.9549 61.6804 90.9163 61.2502 89.8333 61.2502ZM81.6667 4.0835H65.3333C64.2504 4.0835 63.2117 4.5137 62.446 5.27948C61.6802 6.04525 61.25 7.08386 61.25 8.16683C61.25 9.2498 61.6802 10.2884 62.446 11.0542C63.2117 11.82 64.2504 12.2502 65.3333 12.2502H81.6667C82.7496 12.2502 83.7882 12.6804 84.554 13.4461C85.3198 14.2119 85.75 15.2505 85.75 16.3335V32.6668C85.75 33.7498 86.1802 34.7884 86.946 35.5542C87.7117 36.32 88.7504 36.7502 89.8333 36.7502C90.9163 36.7502 91.9549 36.32 92.7207 35.5542C93.4865 34.7884 93.9167 33.7498 93.9167 32.6668V16.3335C93.9167 13.0846 92.626 9.96876 90.3287 7.67144C88.0314 5.37412 84.9156 4.0835 81.6667 4.0835ZM8.16666 36.7502C9.24963 36.7502 10.2882 36.32 11.054 35.5542C11.8198 34.7884 12.25 33.7498 12.25 32.6668V16.3335C12.25 15.2505 12.6802 14.2119 13.446 13.4461C14.2117 12.6804 15.2504 12.2502 16.3333 12.2502H32.6667C33.7496 12.2502 34.7882 11.82 35.554 11.0542C36.3198 10.2884 36.75 9.2498 36.75 8.16683C36.75 7.08386 36.3198 6.04525 35.554 5.27948C34.7882 4.5137 33.7496 4.0835 32.6667 4.0835H16.3333C13.0844 4.0835 9.96859 5.37412 7.67127 7.67144C5.37395 9.96876 4.08333 13.0846 4.08333 16.3335V32.6668C4.08333 33.7498 4.51354 34.7884 5.27931 35.5542C6.04508 36.32 7.08369 36.7502 8.16666 36.7502Z"
                  fill="black"
                />
              </Svg>
              <Typography variant="title5">Permission Required</Typography>
              <Typography alignment="center">
                Please give permission to access camera
              </Typography>
              <View>
                <Button text="Accept" onPress={handleAccept} />
                <Button text="Decline" onPress={handleDecline} />
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
