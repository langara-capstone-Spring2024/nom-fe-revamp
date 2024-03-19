import {
  View,
  Text,
  Image,
  Touchable,
  Keyboard,
  TextInput,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import createStyles from "./AdMaker.style";
import { AdMakerGeneratedProps } from "./AdMaker.props";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme, Modal, Portal } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import * as Progress from "react-native-progress";
import CircularNumber from "../../components/base/CircularNumber";
import Typography from "../../components/base/Typography";
import AdImagePicker from "../../components/base/AdImagePicker";
import Button from "../../components/base/Button";
import { convertDate } from "../../utils/transformDate";
import { RadioButton } from "react-native-paper";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DatePicker from "../../components/base/DatePicker";
import ButtonCollection from "../../collections/base/Button";
import { CardField } from "@stripe/stripe-react-native";
import useKeyboard from "../../utils/hooks/useKeyboard";
import AdTemplateTwo from "../../components/base/AdTemplateTwo";
import AdTemplateOne from "../../components/base/AdTemplateOne";
import { Check } from "../../components/base/SVG";
import NavigationService from "../../navigation/NavigationService";
import AdTemplateThree from "../../components/base/AdTemplateThree";
import LoadingAnimation from "../../components/base/LoadingAnimation";

const { width, height } = Dimensions.get("window");

const AdMaker = (props: AdMakerGeneratedProps) => {
  const {
    localImage,
    handleImageChange,
    next,
    page,
    selectedColor,
    customSwatches,
    onColorSelect,
    snapPoints,
    idx,
    openPrimaryModal,
    openAccentModal,
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
    showDate,
    toggleDateDisplay,
    handleSelectDates,
    dateSheetModalRef,
    selectedStartDate,
    selectedEndDate,
    totalAdPrice,
    confirm,
    savedCards,
    handleSelectedPmChange,
    selectedPaymentMethodId,
    cardSheetModalRef,
    toggleCardDisplay,
    showStripe,
    handleAddNewCard,
    promptSheetModalRef,
    togglePromptDisplay,
    showPrompt,
    description,
    setDescription,
    otherSnapPoints,
    setShowPrompt,
    handleGenerateAiText,
    isCreateAdSuccess,
    openSuccess,
    setOpenSuccess,
    setPage,
    selectedPrimaryColor,
    selectedAccentColor,
    selectedTemplate,
    setSelectedTemplate,
    aiIsLoading,
    isConfirmLoading,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme as any), [theme]);

  const isKeyboardOpen = useKeyboard();
  const container =
    idx === 0 &&
    (openAccentModal ||
      openPrimaryModal ||
      showDate ||
      showStripe ||
      showPrompt)
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
        <View>
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
          <View style={{ flexDirection: "column", gap: 8 }}>
            <View
              style={{
                height: 180,
                width: 350,
                marginLeft: -36,
              }}>
              <AdTemplateOne
                image={localImage}
                headline="Up to 50% off!"
                tagline="Lorem ipsum dolor sit amet est officiis."
                primary={selectedPrimaryColor}
                secondary={selectedAccentColor}
                onSelectTemplate={(v) => setSelectedTemplate(v)}
                style={
                  selectedTemplate === 1
                    ? { borderWidth: 2, borderColor: "#E51E35" }
                    : {}
                }
              />
            </View>
            <View
              style={{
                height: 180,
                width: 350,
                marginLeft: -36,
              }}>
              <AdTemplateTwo
                onSelectTemplate={(v) => setSelectedTemplate(v)}
                image={localImage}
                headline="Up to 50% off!"
                tagline="Lorem ipsum dolor sit amet est officiis."
                primary={selectedPrimaryColor}
                secondary={selectedAccentColor}
                style={
                  selectedTemplate === 2
                    ? { borderWidth: 2, borderColor: "#E51E35" }
                    : {}
                }
              />
            </View>
          </View>
        </View>
      );
    } else if (page === 3) {
      return (
        <>
          <Typography variant="title5" alignment="left" color="primary">
            Edit Ad Text
          </Typography>
          <KeyboardAwareScrollView style={styles.keyboard}>
            <View
              style={{
                height: 180,
                width: 350,
                marginTop: 36,
                marginBottom: 36,
              }}>
              {selectedTemplate === 1 && (
                <AdTemplateOne
                  image={localImage}
                  headline={headline ?? "Up to 50% off!"}
                  tagline={
                    tagline ?? "Lorem ipsum dolor sit amet est officiis."
                  }
                  primary={selectedPrimaryColor}
                  secondary={selectedAccentColor}
                  onSelectTemplate={(v) => setSelectedTemplate(v)}
                />
              )}
              {selectedTemplate === 2 && (
                <AdTemplateTwo
                  onSelectTemplate={(v) => setSelectedTemplate(v)}
                  image={localImage}
                  headline={headline ?? "Up to 50% off!"}
                  tagline={
                    tagline ?? "Lorem ipsum dolor sit amet est officiis."
                  }
                  primary={selectedPrimaryColor}
                  secondary={selectedAccentColor}
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.generateAdTextContainer}
              onPress={togglePromptDisplay}>
              <FontAwesome name="pencil-square-o" size={16} color="black" />
              <Typography
                variant="label2"
                color="medium"
                otherStyle={styles.generateAdTextBtn}>
                Generate Ad Text
              </Typography>
            </TouchableOpacity>
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
          </KeyboardAwareScrollView>
        </>
      );
    } else if (page === 4) {
      return (
        <>
          <Typography
            variant="title5"
            alignment="left"
            color="primary"
            otherStyle={{ marginBottom: 36 }}>
            Confirm & Pay
          </Typography>
          <ScrollView
            style={styles.scrollViewContent}
            contentContainerStyle={{
              paddingBottom: 280,
            }}>
            <View
              style={{
                height: 180,
                width: 350,
                marginTop: 36,
                marginBottom: 36,
              }}>
              {selectedTemplate === 1 && (
                <AdTemplateOne
                  image={localImage}
                  headline={headline}
                  tagline={tagline}
                  primary={selectedPrimaryColor}
                  secondary={selectedAccentColor}
                  onSelectTemplate={(v) => setSelectedTemplate(v)}
                />
              )}
              {selectedTemplate === 2 && (
                <AdTemplateTwo
                  onSelectTemplate={(v) => setSelectedTemplate(v)}
                  image={localImage}
                  headline={headline}
                  tagline={headline}
                  primary={selectedPrimaryColor}
                  secondary={selectedAccentColor}
                />
              )}
            </View>
            <View style={styles.campaignDetailsWrapper}>
              <Typography
                variant="body"
                weight="600"
                otherStyle={{ fontFamily: "PublicSansMedium" }}>
                Ad Campaign Details
              </Typography>
              <View style={styles.hr} />
              <View style={styles.dateWrapper}>
                <Typography variant="body">Date</Typography>
                <TouchableOpacity onPress={toggleDateDisplay}>
                  <View
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#f4f4f5",
                    }}>
                    <Typography
                      variant="body"
                      otherStyle={{
                        padding: 8,
                      }}>
                      {selectedEndDate &&
                        selectedStartDate &&
                        convertDate(selectedStartDate, selectedEndDate)}
                    </Typography>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.hrInside} />
              <View style={styles.priceWrapper}>
                <Typography variant="body">Price</Typography>
                <Typography variant="body" color="brand-medium">
                  {totalAdPrice}CA$
                </Typography>
              </View>
            </View>

            <View style={{ height: 32 }} />
            <View style={styles.campaignDetailsWrapper}>
              <Typography
                variant="body"
                weight="600"
                otherStyle={{ fontFamily: "PublicSansMedium" }}>
                Payment Method
              </Typography>
              <View style={styles.hr} />
              {/* {savedCards && savedCards.map((card, idx) => (
                <RadioButton
                  key={idx}
                  value={card.cards.paymentMethodId}
                />
              ))} */}

              <RadioButton.Group
                onValueChange={handleSelectedPmChange}
                value={selectedPaymentMethodId}>
                {savedCards &&
                  savedCards.map((card) => {
                    let cardIcon;
                    if (card.brand === "mastercard") {
                      cardIcon = (
                        <Image
                          source={require(`../../../assets/mastercard.png`)}
                        />
                      );
                    } else {
                      cardIcon = (
                        <Image source={require(`../../../assets/visa.png`)} />
                      );
                    }
                    return (
                      <View key={card.paymentMethodId}>
                        <View
                          style={[
                            styles.radioContainer,
                            { marginTop: 16, marginBottom: -5 },
                          ]}>
                          <View style={styles.radioLabel}>
                            {cardIcon}
                            <Typography variant="body" color="medium">
                              **** {card.last4}
                            </Typography>
                          </View>
                          <RadioButton.Android
                            value={card.paymentMethodId}
                            color="#3C6DEB"
                          />
                        </View>
                        <View style={styles.hrInside} />
                      </View>
                    );
                  })}
              </RadioButton.Group>
              <TouchableOpacity
                style={styles.addNewCard}
                onPress={toggleCardDisplay}>
                <AntDesign name="plus" size={16} color="black" />
                <Typography variant="body"> Add New Card</Typography>
              </TouchableOpacity>
            </View>

            <View />
          </ScrollView>
        </>
      );
    }
  };

  // console.log(localImage);
  // console.log(page);

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
        {page === 4 ? (
          <Button
            variant="primary"
            buttonSize="lg"
            text={"Confirm"}
            takeFullWidth
            onPress={page == 4 ? confirm : next}
            isDisabled={!selectedPaymentMethodId}
          />
        ) : (
          <Button
            variant="primary"
            buttonSize="lg"
            text={"Next"}
            takeFullWidth
            onPress={page == 4 ? confirm : next}
            isDisabled={
              (!localImage && page === 1) ||
              (page === 3 && !tagline && !headline)
            }
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
      {page === 3 && (
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={promptSheetModalRef}
            index={0}
            snapPoints={isKeyboardOpen ? ["85%"] : ["50%"]}
            onChange={handleSheetChanges}>
            <View>
              <Typography
                variant="body"
                alignment="center"
                otherStyle={{
                  marginTop: 16,
                  fontFamily: "PublicSansMedium",
                }}>
                Write your Prompt
              </Typography>
              <View style={{ marginHorizontal: 16, marginTop: 27, gap: 30 }}>
                <TextArea
                  defaultValue={description}
                  setValue={setDescription}
                  placeholder="e.g. Create a 20% discount for all japanese cuisines."
                  label="Describe your ad campaign"
                  maxLength={100}
                  numberOfLines={2}
                />
                <Button
                  variant="primary"
                  buttonSize="lg"
                  text="Generate Ad Text"
                  takeFullWidth
                  onPress={handleGenerateAiText}
                  iconPosition="left"
                  icon={
                    <FontAwesome
                      name="pencil-square-o"
                      size={20}
                      color="white"
                    />
                  }
                />
              </View>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      )}

      {page === 4 && (
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={dateSheetModalRef}
            index={0}
            snapPoints={["60%"]}
            onChange={handleSheetChanges}>
            <View>
              <DatePicker onSelectDates={handleSelectDates} />
            </View>
          </BottomSheetModal>
          <BottomSheetModal
            ref={cardSheetModalRef}
            index={0}
            snapPoints={isKeyboardOpen ? ["80%"] : ["40%"]}
            onChange={handleSheetChanges}>
            <View style={styles.newCardContainer}>
              <Typography
                variant="body"
                alignment="center"
                otherStyle={{
                  marginTop: 16,
                  fontFamily: "PublicSansMedium",
                }}>
                Add New Card
              </Typography>
              <View>
                <Typography variant="label2" otherStyle={{ marginBottom: 6 }}>
                  Enter Card Details
                </Typography>
                <CardField
                  placeholders={{
                    number: "4242 4242 4242 4242",
                  }}
                  cardStyle={{
                    backgroundColor: "#FFFFFF",
                    textColor: "#000000",
                  }}
                  style={styles.cardField}
                />
              </View>

              <Button
                variant="primary"
                buttonSize="lg"
                text="Confirm"
                takeFullWidth
                onPress={handleAddNewCard}
              />
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      )}

      <Portal>
        <Modal
          style={{ backgroundColor: "#0000004D", flex: 1 }}
          dismissable={false}
          visible={openSuccess}
          onDismiss={() => setOpenSuccess(false)}
          contentContainerStyle={styles.successModalContainer}>
          <Check />
          <Typography variant="title5" otherStyle={styles.successModal}>
            Success!
          </Typography>
          <Typography
            variant="body"
            otherStyle={{ textAlign: "center", marginBottom: 36 }}>
            Your ad campaign has been created successfully!
          </Typography>
          <Button
            variant="primary"
            buttonSize="lg"
            text="Home"
            takeFullWidth
            onPress={() => {
              NavigationService.navigate("MerchantHome");
              setOpenSuccess(false);
              setPage(1);
            }}
          />
        </Modal>
      </Portal>

      {(aiIsLoading || isConfirmLoading) && (
        <View style={styles.loading}>
          <LoadingAnimation />
        </View>
      )}
    </View>
  );
};

export default AdMaker;
