import { View, Text } from "react-native";
import createStyles from "./AdMaker.style";
import { AdMakerGeneratedProps } from "./AdMaker.props";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import * as Progress from "react-native-progress";
import CircularNumber from "../../components/base/CircularNumber";
import Typography from "../../components/base/Typography";
import AdImagePicker from "../../components/base/AdImagePicker";
import Button from "../../components/base/Button";

import ColorPicker, {
  Panel1,
  Swatches,
  OpacitySlider,
  HueSlider,
  colorKit,
  PreviewText,
} from "reanimated-color-picker";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const AdMaker = (props: AdMakerGeneratedProps) => {
  const {
    localImage,
    handleImageChange,
    next,
    prev,
    page,
    selectedColor,
    customSwatches,
    onColorSelect,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme as any), [theme]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const snapPoints = useMemo(() => ["65%"], []);
  const handlePresentModalPress = useCallback(() => {
    setIsOpenModal(true);
    bottomSheetModalRef.current?.present();
  }, []);

  const [idx, setIdx] = React.useState(0);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    setIdx(index);
  }, []);

  const handleClosePress = useCallback(() => {
    setIsOpenModal(false);
    bottomSheetModalRef.current?.close();
  }, []);

  const container =
    idx === 0 && isOpenModal ? styles.openModalContainer : styles.container;

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
          <View style={styles.primaryAccentWrapper}>
            <Button
              onPress={handlePresentModalPress}
              text="Primary Color"
              variant="chip"
              buttonSize="chipSize"
              iconPosition="left"
              icon={<View style={styles.primarySquare} />}
            />
            <Button
              onPress={handlePresentModalPress}
              text="Accent Color"
              variant="chip"
              buttonSize="chipSize"
              iconPosition="left"
              icon={<View style={styles.accentSquare} />}
            />
          </View>
        </>
      );
    }
    // Add more conditions for other pages if needed
  };

  return (
    <View style={container}>
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
      {page === 2 && (
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View style={styles.pickerHeader}>
              <Button
                variant="error"
                buttonSize="md"
                text="Cancel"
                onPress={handleClosePress}
              />
              <Typography variant="body" weight="700">
                Primary Color
              </Typography>
              <Button variant="error" buttonSize="md" text="Save" />
            </View>

            <View style={styles.pickerContainer}>
              <ColorPicker
                value={selectedColor.value}
                sliderThickness={24}
                thumbSize={24}
                thumbShape="circle"
                onChange={onColorSelect}
                boundedThumb>
                <Panel1 style={styles.panelStyle} />
                <HueSlider style={styles.sliderStyle} />
                <OpacitySlider style={styles.sliderStyle} />
                <Swatches
                  style={styles.swatchesContainer}
                  swatchStyle={styles.swatchStyle}
                  colors={customSwatches}
                />
                {/* <View>
                  <PreviewText style={{ color: "#707070" }} />
                </View> */}
              </ColorPicker>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      )}
    </View>
  );
};

export default AdMaker;
