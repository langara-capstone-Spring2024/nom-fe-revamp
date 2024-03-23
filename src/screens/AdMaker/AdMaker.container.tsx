import AdMakerView from "./AdMaker.view";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Image } from "../../types";
import { colorKit } from "reanimated-color-picker";
import { useSharedValue } from "react-native-reanimated";
import type { returnedResults } from "reanimated-color-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { v4 as uuidv4 } from "uuid";
import { getDates, getDaysOfWeekInRange } from "../../utils/transformDate";
import {
  CreateAd,
  GeneratetAiText,
  GetPrices,
} from "../../services/react-query/queries/ad";
import { calculateTotalAdPrice } from "../../utils/getTotalAdPrice";
import { useStore } from "../../store";
import {
  AddPaymentMethod,
  GetAllSavedCards,
} from "../../services/react-query/queries/stripe";
import { createPaymentMethod } from "@stripe/stripe-react-native";
import { S3Params } from "../../types/S3Params";
import { S3 } from "aws-sdk";

const AdMaker = () => {
  const { prev, next, page, setAdScreen, setPage } = useStore((state) => ({
    setAdScreen: state.setAdScreen,
    prev: state.previous,
    next: state.next,
    page: state.page,
    setPage: state.setPage,
  }));

  useEffect(() => {
    setAdScreen(true);
  }, []);

  //start of page 1
  const [localImage, setLocalImage] = useState<Image | undefined>(undefined);
  const handleImageChange = (image?: Image | undefined) => {
    setLocalImage(image);
    // Here you can save the image details to your form data or state
    // Example:
    // form.append('image', image);
  };

  //end of page 1

  //start of page 2
  const [openPrimaryModal, setOpenPrimaryModal] = useState(false);
  const [openAccentModal, setOpenAccentModal] = useState(false);
  const [idx, setIdx] = useState(0);
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState("#FFBF41");
  const [selectedAccentColor, setSelectedAccentColor] = useState("#3c3c3c");
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const customSwatches = new Array(6)
    .fill("#fff")
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);

  const onColorSelect = (color: returnedResults) => {
    "worklet";
    selectedColor.value = color.hex;
  };

  const snapPoints = useMemo(() => ["90%"], []);
  const otherSnapPoints = useMemo(() => ["70%"], []);
  const primarySheetModalRef = useRef<BottomSheetModal>(null);
  const accentSheetModalRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback((index: number) => {
    setIdx(index);
  }, []);

  const handlePresentPrimaryPress = useCallback(() => {
    primarySheetModalRef.current?.present();
    setOpenPrimaryModal(true);
  }, [openPrimaryModal]);

  const handlePresentAccentPress = useCallback(() => {
    accentSheetModalRef.current?.present();
    setOpenAccentModal(true);
  }, [openAccentModal]);

  const handleClosePress = useCallback(() => {
    setOpenPrimaryModal(false);
    setOpenAccentModal(false);
    primarySheetModalRef.current?.close();
    accentSheetModalRef.current?.close();
  }, []);

  const handleSavePress = useCallback(() => {
    setOpenPrimaryModal(false);
    setOpenAccentModal(false);
    if (openPrimaryModal) {
      primarySheetModalRef.current?.close();
      setSelectedPrimaryColor(selectedColor.value);
    }
    if (openAccentModal) {
      accentSheetModalRef.current?.close();
      setSelectedAccentColor(selectedColor.value);
    }
  }, [openPrimaryModal, openAccentModal, selectedColor.value]);

  useEffect(() => {
    if (openPrimaryModal) {
      primarySheetModalRef.current?.present();
    } else {
      primarySheetModalRef.current?.close();
    }
  }, [openPrimaryModal]);

  useEffect(() => {
    if (openAccentModal) {
      accentSheetModalRef.current?.present();
    } else {
      accentSheetModalRef.current?.close();
    }
  }, [openAccentModal]);

  //end of page 2

  //start of page 3

  const [headline, setHeadline] = useState("");
  const [tagline, setTagline] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [description, setDescription] = useState("");

  const promptSheetModalRef = useRef<BottomSheetModal>(null);
  const togglePromptDisplay = useCallback(() => {
    promptSheetModalRef.current?.present();
    setShowPrompt(true);
  }, [showPrompt]);

  const {
    mutate: generateAiText,
    data,
    isSuccess: isSuccessAi,
    isPending: aiIsLoading,
  } = GeneratetAiText();
  const handleGenerateAiText = async () => {
    try {
      if (description) {
        generateAiText(description);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setDescription("");
      promptSheetModalRef.current?.close();
      setShowPrompt(false);
    }
  };

  useEffect(() => {
    if (isSuccessAi) {
      promptSheetModalRef.current?.close();
      setTagline(data.t ?? "");
      setHeadline(data.h ?? "");
      setDescription("");
    }
  }, [data?.t, data?.h]);
  //end of page 3

  //start of page 4

  const [today, fiveDaysLater] = getDates();
  const [showDate, setShowDate] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(today);
  const [selectedEndDate, setSelectedEndDate] = useState(fiveDaysLater);

  const [showStripe, setShowStripe] = useState(false);

  const handleSelectDates = (startDate: string, endDate: string) => {
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const dateSheetModalRef = useRef<BottomSheetModal>(null);

  const toggleDateDisplay = useCallback(() => {
    dateSheetModalRef.current?.present();
    setShowDate(true);
  }, [showDate]);

  const handleCloseDatePress = useCallback(() => {
    setShowDate(false);
    setSelectedEndDate("");
    setSelectedStartDate("");
    dateSheetModalRef.current?.close();
  }, []);

  const handleSaveDatePress = useCallback(() => {
    setShowDate(false);
    dateSheetModalRef.current?.close();
  }, [showDate]);

  const cardSheetModalRef = useRef<BottomSheetModal>(null);

  const toggleCardDisplay = useCallback(() => {
    cardSheetModalRef.current?.present();
    setShowStripe(true);
  }, [showStripe]);

  const handleCloseCardPress = useCallback(() => {
    setShowStripe(false);
    cardSheetModalRef.current?.close();
  }, []);

  const { data: adPrices, isError } = GetPrices();

  const daysList = getDaysOfWeekInRange(selectedStartDate, selectedEndDate);

  const totalAdPrice = calculateTotalAdPrice(adPrices, daysList);

  const [checked, setChecked] = useState("mastercard");

  const { mutate, isSuccess } = AddPaymentMethod();

  const handleAddNewCard = async () => {
    try {
      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: "Card",
      });

      if (error) {
        console.error("Error creating payment method:", error.message);
      } else {
        mutate(paymentMethod.id);
      }
      handleCloseCardPress();
    } catch (error) {
      console.error("Error creating payment method:", error);
    }
  };

  const { data: savedCards } = GetAllSavedCards();
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState("");
  const handleSelectedPmChange = (value: string) => {
    setSelectedPaymentMethodId(value);
  };

  const s3 = new S3({
    accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.EXPO_PUBLIC_AWS_REGION,
  });

  const {
    mutate: createAd,
    isSuccess: isCreateAdSuccess,
    isPending: isConfirmLoading,
  } = CreateAd();

  const [openSuccess, setOpenSuccess] = useState(false);

  const confirm = async () => {
    if (localImage) {
      const uuid = uuidv4();
      const response = await fetch(localImage.uri || "");
      const blob = await response.blob();
      const contentType = response.headers.get("Content-Type");

      if (!contentType) return;

      const params = {
        Bucket: process.env.EXPO_PUBLIC_AWS_BUCKET_NAME || "",
        Key: `uploads/${uuid}`,
        Body: blob,
        ContentType: contentType,
      };

      try {
        const result = await s3.upload(params).promise();
        let imageUrl = result.Location;
        if (
          !!imageUrl &&
          !!totalAdPrice &&
          !!selectedEndDate &&
          !!selectedStartDate &&
          !!selectedAccentColor &&
          !!selectedPrimaryColor &&
          !!headline &&
          !!tagline &&
          !!selectedPrimaryColor &&
          !!selectedAccentColor
        ) {
          createAd({
            template: selectedTemplate,
            headline,
            tagline,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            amount: totalAdPrice,
            imageUrl,
            primary: selectedPrimaryColor,
            accent: selectedAccentColor,
            paymentMethodId: selectedPaymentMethodId,
          });
        }
      } catch (error) {
        console.error("Error uploading image to S3:", error);
      }
    }
  };

  useEffect(() => {
    setOpenSuccess(isCreateAdSuccess);
  }, [isCreateAdSuccess]);
  //end of page 4

  const generatedProps = {
    // generated props here
    handleImageChange,
    localImage,
    next,
    prev,
    page,
    onColorSelect,
    selectedColor,
    customSwatches,
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
    accentSheetModalRef,
    primarySheetModalRef,
    handleSavePress,
    headline,
    setHeadline,
    tagline,
    setTagline,
    showDate,
    setShowDate,
    toggleDateDisplay,
    selectedEndDate,
    selectedStartDate,
    handleSelectDates,
    dateSheetModalRef,
    handleCloseDatePress,
    handleSaveDatePress,
    totalAdPrice,
    confirm,
    checked,
    setChecked,
    savedCards,
    selectedPaymentMethodId,
    setSelectedPaymentMethodId,
    handleSelectedPmChange,
    showStripe,
    setShowStripe,
    cardSheetModalRef,
    toggleCardDisplay,
    handleAddNewCard,
    promptSheetModalRef,
    togglePromptDisplay,
    showPrompt,
    setShowPrompt,
    description,
    setDescription,
    otherSnapPoints,
    handleGenerateAiText,
    isCreateAdSuccess,
    openSuccess,
    setOpenSuccess,
    setPage,
    selectedAccentColor,
    selectedPrimaryColor,
    setSelectedTemplate,
    selectedTemplate,

    aiIsLoading,
    isConfirmLoading,
  };

  return <AdMakerView {...generatedProps} />;
};

export default AdMaker;
