import { useNavigation, useRoute } from "@react-navigation/native";
import ConsumerDiscountView from "./ConsumerDiscount.view";
import {
  GetConsumerDiscount,
  UpdateConsumerDiscount,
} from "../../services/react-query/queries/consumerDiscount";
import { useEffect } from "react";

const ConsumerDiscount = () => {
  const { consumerDiscountId } = useRoute().params as {
    consumerDiscountId: string;
  };

  const navigation = useNavigation();

  const { data: consumerDiscount = null, refetch: refetchConsumerDiscount } =
    GetConsumerDiscount(consumerDiscountId);
  const { mutate: mutateConsumerDiscount } = UpdateConsumerDiscount();

  const handleDownload = () => {};

  const handleCancel = () => {
    if (consumerDiscount && consumerDiscount.status !== "cancelled") {
      console.log(consumerDiscount);
      mutateConsumerDiscount({
        consumerDiscount: { ...consumerDiscount, status: "cancelled" },
      });
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: "" });
  }, []);

  const generatedProps = {
    consumerDiscount,
    handleDownload,
    handleCancel,
  };
  return <ConsumerDiscountView {...generatedProps} />;
};

export default ConsumerDiscount;
