import { StyleSheet } from "react-native";
import { Theme } from "../../../config/theme-config";
import { theme as t } from "../../../utils/Theme";

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
    padding: 32,
    alignItems: "center",
    justifyContent: "flex-end",
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
    zIndex: 1000,
  },
  frame: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 48,
    borderWidth: 3,
    borderColor: t.Border.white,
  },
  leftTopCorner: { position: "absolute", top: 0, left: 0 },
  rightTopCorner: { position: "absolute", top: 0, right: 0 },
  rightBottomCorner: { position: "absolute", bottom: 0, right: 0 },
  leftBottomCorner: { position: "absolute", bottom: 0, left: 0 },
  modalContainer: {
    marginTop: "50%",
    width: "80%",
    backgroundColor: t.Content["white-strong"],
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    gap: 16,
  },
});

export default styles;
