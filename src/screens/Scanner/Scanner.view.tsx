import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Scanner.style";
import Button from "../../components/base/Button";
import { ScannerGeneratedProps } from "./Scanner.props";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

const Scanner = (props: ScannerGeneratedProps) => {
  const {
    type,
    permission,
    scanned,
    setScanned,
    handleRequestPermission,
    handleScan,
    toggleCameraType,
  } = props;

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
            variant="tertiary"
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
