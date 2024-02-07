import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    // margin: 'auto',
    // backgroundColor: 'pink',
    height: "100%",
  },

  animation: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
  },
});

export default styles;
