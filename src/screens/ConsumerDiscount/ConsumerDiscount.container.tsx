import { useNavigation, useRoute } from "@react-navigation/native";
import ConsumerDiscountView from "./ConsumerDiscount.view";
import {
  GetConsumerDiscount,
  UpdateConsumerDiscount,
} from "../../services/react-query/queries/consumerDiscount";
import { useEffect, useState } from "react";
import { GetMenuDiscountsByDiscount } from "../../services/react-query/queries/menuDiscount";
import NavigationService from "../../navigation/NavigationService";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

const ConsumerDiscount = () => {
  const { consumerDiscountId } = useRoute().params as {
    consumerDiscountId: string;
  };

  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { data: consumerDiscount = null } =
    GetConsumerDiscount(consumerDiscountId);
  const { data: menuDiscounts = [] } = GetMenuDiscountsByDiscount(
    consumerDiscount?.discount._id
  );
  const {
    data: updateConsumerDiscount,
    mutate: mutateConsumerDiscount,
    isError: isErrorUpdateConsumerDiscount,
  } = UpdateConsumerDiscount();

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownload = async () => {
    if (consumerDiscount && consumerDiscount.qrCode) {
      try {
        const path = FileSystem.cacheDirectory + "qr.jpeg";

        await FileSystem.writeAsStringAsync(path, consumerDiscount.qrCode, {
          encoding: FileSystem.EncodingType.Base64,
        });

        await MediaLibrary.createAssetAsync(path);

        await FileSystem.deleteAsync(path);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCancel = () => {
    if (consumerDiscount && consumerDiscount.status !== "cancelled") {
      mutateConsumerDiscount({
        consumerDiscount: { ...consumerDiscount, status: "cancelled" },
      });
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: "" });
  }, []);

  useEffect(() => {
    if (updateConsumerDiscount) {
      NavigationService.goBack();
    }
  }, [updateConsumerDiscount]);

  const generatedProps = {
    isVisible,
    isErrorUpdateConsumerDiscount,
    consumerDiscount,
    menuDiscounts,
    handleOpen,
    handleClose,
    handleDownload,
    handleCancel,
  };
  return <ConsumerDiscountView {...generatedProps} />;
};

export default ConsumerDiscount;
