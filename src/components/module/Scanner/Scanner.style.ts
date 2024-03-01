import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  camera: {
    flex: 1,
  },
  permissionContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1,
  },
  topOverlay: {
    width: "100%",
    flex: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  rightOverlay: {
    height: "100%",
    flex: 0.25,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  bottomOverlay: {
    width: "100%",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftOverlay: {
    height: "100%",
    flex: 0.25,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  lense: {
    flex: 1,
    aspectRatio: 1,
  },
  frame: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 48,
    borderWidth: 3,
  },
  leftTopCorner: { position: "absolute", top: 0, left: 0 },
  rightTopCorner: { position: "absolute", top: 0, right: 0 },
  rightBottomCorner: { position: "absolute", bottom: 0, right: 0 },
  leftBottomCorner: { position: "absolute", bottom: 0, left: 0 },
  errorContainer: {
    marginTop: "50%",
    width: "80%",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    gap: 16,
  },
  // buttonContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   backgroundColor: "transparent",
  //   margin: 64,
  // },
  // buttonCamera: {
  //   flex: 1,
  //   alignSelf: "flex-end",
  //   alignItems: "center",
  // },
});

export default styles;
