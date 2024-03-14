import { useNavigation, useRoute } from "@react-navigation/native";
import ConsumerDiscountView from "./ConsumerDiscount.view";
import { GetConsumerDiscount } from "../../services/react-query/queries/consumerDiscount";
import { useEffect } from "react";

const ConsumerDiscount = () => {
  const { consumerDiscountId } = useRoute().params as {
    consumerDiscountId: string;
  };

  const navigation = useNavigation();

  const { data: consumerDiscount = null, refetch: refetchConsumerDiscount } =
    GetConsumerDiscount(consumerDiscountId);

  useEffect(() => {
    navigation.setOptions({ headerTitle: "" });
  }, []);

  const generatedProps = {
    consumerDiscount,
  };
  return <ConsumerDiscountView {...generatedProps} />;
};

export default ConsumerDiscount;
