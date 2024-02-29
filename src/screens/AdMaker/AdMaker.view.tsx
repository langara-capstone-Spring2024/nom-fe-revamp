import { View, Text, Image, TextInput } from "react-native";
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
import TextInputField from "../../components/base/TextInputField";
import TextArea from "../../components/base/TextArea";

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
    snapPoints,
    idx,
    setIdx,
    openPrimaryModal,
    setOpenPrimaryModal,
    openAccentModal,
    setOpenAccentModal,
    handleSheetChanges,
    handlePresentAccentPress,
    handlePresentPrimaryPress,
    handleClosePress,
    primarySheetModalRef,
    accentSheetModalRef,
    handleSavePress,
    headline,
    setHeadline,
    tagline,
    setTagline,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme as any), [theme]);

  const container =
    idx === 0 && (openAccentModal || openPrimaryModal)
      ? styles.openModalContainer
      : styles.container;

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
              onPress={handlePresentPrimaryPress}
              text="Primary Color"
              variant="chip"
              buttonSize="chipSize"
              iconPosition="left"
              icon={<View style={styles.primarySquare} />}
            />
            <Button
              onPress={handlePresentAccentPress}
              text="Accent Color"
              variant="chip"
              buttonSize="chipSize"
              iconPosition="left"
              icon={<View style={styles.accentSquare} />}
            />
          </View>
        </>
      );
    } else if (page === 3) {
      return (
        <>
          <Typography variant="title5" alignment="left" color="primary">
            Edit Ad Text
          </Typography>

          <View style={styles.editAdTextImageContainer}>
            <Image
              source={{ uri: localImage?.uri }}
              style={styles.editAdTextImage}
            />
          </View>
          <View style={styles.edAdTextHeadlineWrapper}>
            <View>
              <TextInputField
                label="Headline"
                placeholder="e.g. Best Weekly Deals"
                value={headline}
                setValue={setHeadline}
                noClear
                maxLength={20}
              />
              <Typography
                variant="bodyXs"
                otherStyle={{
                  color: "#686868",
                  textAlign: "right",
                  marginTop: 4,
                }}>
                {headline.length}/20 characters
              </Typography>
            </View>
            <View style={{ height: 10 }} />
            <View>
              <TextArea
                value={tagline}
                setValue={setTagline}
                placeholder="e.g. Enjoy up to 50% off!"
                label="Tagline"
                maxLength={40}
                numberOfLines={2}
              />
              <Typography
                variant="bodyXs"
                otherStyle={{
                  color: "#686868",
                  textAlign: "right",
                  marginTop: 4,
                }}>
                {tagline.length}/40 characters
              </Typography>
            </View>
          </View>
        </>
      );
    } else if (page === 4) {
      return (
        <>
          <Typography variant="title5" alignment="left" color="primary">
            Confirm & Pay
          </Typography>
          <View style={styles.editAdTextImageContainer}>
            <Image
              source={{ uri: localImage?.uri }}
              style={styles.editAdTextImage}
            />
          </View>
        </>
      );
    }
  };

  console.log(localImage);
  console.log(page);

  return (
    <View style={container}>
      <Progress.Bar
        progress={page / 4}
        color={t.Surface["brand-medium"]}
        unfilledColor={t.Surface["brand-light"]}
        borderWidth={0}
        height={4}
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
          text="Next"
          takeFullWidth
          onPress={next}
          isDisabled={!localImage && page === 1}
        />
        {page !== 1 && (
          <Button
            variant="secondary"
            buttonSize="lg"
            text="Previous"
            takeFullWidth
            onPress={prev}
          />
        )}
      </View>
      {page === 2 && (
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={openPrimaryModal ? primarySheetModalRef : accentSheetModalRef}
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
                {openPrimaryModal ? "Primary Color" : "Accent Color"}
              </Typography>
              <Button
                variant="error"
                buttonSize="md"
                text="Save"
                onPress={handleSavePress}
              />
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
