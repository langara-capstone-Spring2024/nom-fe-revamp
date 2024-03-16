import { useNavigation, useRoute } from "@react-navigation/native";
import ConsumerDiscountView from "./ConsumerDiscount.view";
import {
  GetConsumerDiscount,
  UpdateConsumerDiscount,
} from "../../services/react-query/queries/consumerDiscount";
import { useEffect, useState } from "react";
import { GetMenuDiscountsByDiscount } from "../../services/react-query/queries/menuDiscount";

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
  const { mutate: mutateConsumerDiscount } = UpdateConsumerDiscount();

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownload = () => {};

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

  const generatedProps = {
    isVisible,
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
