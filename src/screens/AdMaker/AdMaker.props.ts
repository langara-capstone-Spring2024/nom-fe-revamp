import { Dispatch, RefObject, SetStateAction } from "react";
import { Image } from "../../types/Image";
import { returnedResults } from "reanimated-color-picker";
import { SharedValue } from "react-native-reanimated";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureResponderEvent } from "react-native";

export interface AdMakerGeneratedProps {
  localImage?: Image;
  handleImageChange: (image?: Image | undefined) => void;

  next: () => void;
  prev: () => void;
  page: number;

  selectedColor: SharedValue<string>;
  customSwatches: string[];
  onColorSelect: (color: returnedResults) => void;

  snapPoints: string[];
  otherSnapPoints: string[];
  primarySheetModalRef: RefObject<BottomSheetModal>;
  accentSheetModalRef: RefObject<BottomSheetModal>;

  idx: number;
  setIdx: (v: number) => void;
  openPrimaryModal: boolean;
  setOpenPrimaryModal: (v: boolean) => void;
  openAccentModal: boolean;
  setOpenAccentModal: (v: boolean) => void;
  handleSheetChanges: (v: number) => void;

  handlePresentPrimaryPress: (
    event?: GestureResponderEvent | undefined
  ) => void;
  handlePresentAccentPress: (event?: GestureResponderEvent | undefined) => void;
  handleClosePress: (event?: GestureResponderEvent | undefined) => void;
  handleSavePress: (event?: GestureResponderEvent | undefined) => void;

  headline: string;
  setHeadline: (v: string) => void;
  tagline: string;
  setTagline: (v: string) => void;

  showDate: boolean;
  setShowDate: (v: boolean) => void;
  toggleDateDisplay: () => void;
  selectedStartDate: string;
  selectedEndDate: string;
  handleSelectDates: (start: string, end: string) => void;
  dateSheetModalRef: RefObject<BottomSheetModal>;
  cardSheetModalRef: RefObject<BottomSheetModal>;
  promptSheetModalRef: RefObject<BottomSheetModal>;

  toggleCardDisplay: () => void;
  togglePromptDisplay: () => void;

  handleCloseDatePress: (event?: GestureResponderEvent | undefined) => void;
  handleSaveDatePress: (event?: GestureResponderEvent | undefined) => void;
  totalAdPrice: number;
  confirm: () => void;
  checked: string;
  setChecked: (v: string) => void;
  savedCards: Card[];
  selectedPaymentMethodId: string;
  setSelectedPaymentMethodId: (v: string) => void;
  handleSelectedPmChange: (v: string) => void;

  showStripe: boolean;
  setShowStripe: (v: boolean) => void;

  handleAddNewCard: () => void;

  showPrompt: boolean;
  setShowPrompt: (v: boolean) => void;

  description: string;
  setDescription: (v: string) => void;
  handleGenerateAiText: () => void;

  isCreateAdSuccess: boolean;
  openSuccess: boolean;
  setOpenSuccess: (v: boolean) => void;
  setPage: (v: number) => void;

  selectedPrimaryColor: string;
  selectedAccentColor: string;

  selectedTemplate: number;
  setSelectedTemplate: (v: number) => void;

  //loading states
  aiIsLoading: boolean;
  isConfirmLoading: boolean;
}

interface Card {
  brand: string;
  expMonth: string;
  expYear: string;
  last4: string;
  paymentMethodId: string;
}
