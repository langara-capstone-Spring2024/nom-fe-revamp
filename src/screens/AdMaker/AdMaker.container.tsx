import AdMakerView from "./AdMaker.view";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Image } from "../../types";
import { colorKit } from "reanimated-color-picker";
import { useSharedValue } from "react-native-reanimated";
import type { returnedResults } from "reanimated-color-picker";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const AdMaker = () => {
  const [page, setPage] = useState(1);

  const next = () => {
    setPage((prev) => prev + 1);
  };

  const prev = () => {
    setPage((prev) => prev - 1);
  };

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
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState("");
  const [selectedAccentColor, setSelectedAccentColor] = useState("");

  const customSwatches = new Array(6)
    .fill("#fff")
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);

  const onColorSelect = (color: returnedResults) => {
    "worklet";
    selectedColor.value = color.hex;
  };

  const snapPoints = useMemo(() => ["65%"], []);

  const primarySheetModalRef = useRef<BottomSheetModal>(null);
  const accentSheetModalRef = useRef<BottomSheetModal>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
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

  const [headline, setHeadline] = useState("")
  //end of page 2

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
    setHeadline
  };
  return <AdMakerView {...generatedProps} />;
};

export default AdMaker;
