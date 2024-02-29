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

}
