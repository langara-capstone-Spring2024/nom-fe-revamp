import { View, Text } from "react-native";
import createStyles from "./AdMaker.style";
import { AdMakerGeneratedProps } from "./AdMaker.props";
import React, { useEffect, useMemo } from "react";
import { useTheme } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import * as Progress from "react-native-progress";
import CircularNumber from "../../components/base/CircularNumber";
import Typography from "../../components/base/Typography";
import AdImagePicker from "../../components/base/AdImagePicker";
import Button from "../../components/base/Button";
import { SwipeablePanel } from "rn-swipeable-panel";

import type { returnedResults } from "reanimated-color-picker";
import ColorPicker, {
  Panel1,
  Swatches,
  OpacitySlider,
  HueSlider,
  colorKit,
  PreviewText,
} from "reanimated-color-picker";
import { StyleSheet } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const AdMaker = (props: AdMakerGeneratedProps) => {
  const { localImage, handleImageChange, next, prev, page } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme as any), [theme]);

  const onSelectColor = ({ hex }: { hex: string }) => {
    // do something with the selected color.
    console.log(hex);
  };

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
    },
    pickerContainer: {
      alignSelf: "center",
      width: 300,
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    panelStyle: {
      borderRadius: 16,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    sliderStyle: {
      borderRadius: 20,
      marginTop: 20,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    previewTxtContainer: {
      paddingTop: 20,
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: "#bebdbe",
    },
    swatchesContainer: {
      paddingTop: 20,
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: "#bebdbe",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: 10,
    },
    swatchStyle: {
      borderRadius: 20,
      height: 30,
      width: 30,
      margin: 0,
      marginBottom: 0,
      marginHorizontal: 0,
      marginVertical: 0,
    },
    openButton: {
      width: "100%",
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      backgroundColor: "#fff",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    closeButton: {
      position: "absolute",
      bottom: 10,
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      alignSelf: "center",
      backgroundColor: "#fff",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });

  const customSwatches = new Array(6)
    .fill("#fff")
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);
  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));
  const onColorSelect = (color: returnedResults) => {
    "worklet";
    selectedColor.value = color.hex;
    console.log(color.hex);
  };

  useEffect(() => {
    console.log(selectedColor.value);
  }, [selectedColor.value]);

  const content = () => {
    if (page === 1) {
      return (
        <>
          <Typography variant="title5" alignment="left" color="primary">
            Upload Ad Image
          </Typography>
          <Typography variant="bodySm" alignment="left" color="primary">
            Recommended image ratio is 2:1
          </Typography>
        </>
      );
    } else if (page === 2) {
      return (
        <>
          <Typography variant="title5" alignment="left" color="primary">
            Select a Template
          </Typography>
          {/* Add more JSX for page 2 */}
          <View style={style.pickerContainer}>
            <ColorPicker
              value={selectedColor.value}
              sliderThickness={25}
              thumbSize={24}
              thumbShape="circle"
              onChange={onColorSelect}
              boundedThumb>
              <Panel1 style={style.panelStyle} />
              <HueSlider style={style.sliderStyle} />
              <OpacitySlider style={style.sliderStyle} />
              <Swatches
                style={style.swatchesContainer}
                swatchStyle={style.swatchStyle}
                colors={customSwatches}
              />
              {/* <View style={style.previewTxtContainer}>
                <PreviewText style={{ color: "#707070" }} />
              </View> */}
            </ColorPicker>
          </View>
        </>
      );
    }
    // Add more conditions for other pages if needed
  };

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={page / 4}
        color={t.Border.contrast}
        unfilledColor={"#D4D4D4"}
        borderWidth={0}
        height={2}
        width={null}
        style={styles.progressBar}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <CircularNumber number={page} />
          <View style={styles.textContainer}>{content()}</View>
        </View>
      </View>
      {page === 1 && (
        <View style={styles.imagePicker}>
          <AdImagePicker image={localImage} setImage={handleImageChange} />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          buttonSize="lg"
          text="Previous"
          takeFullWidth
          onPress={prev}
          // isDisabled={!localImage}
        />
        <Button
          variant="primary"
          buttonSize="lg"
          text="Next"
          takeFullWidth
          onPress={next}
          // isDisabled={!localImage}
        />
      </View>
    </View>
  );
};

export default AdMaker;
