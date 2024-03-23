import React, { useState, useEffect } from "react";
import OrderDetailsView from "./OrderDetails.view";
import { useStore } from "../../store";
import {
  GetConsumerDiscount,
  UpdateConsumerDiscount,
} from "../../services/react-query/queries/consumerDiscount";

import { RouteProp, useRoute } from "@react-navigation/native";
import { GetMenuDiscountsByMerchantAndDiscount } from "../../services/react-query/queries/menuDiscount";
import { getConsumerDiscountByMerchantConsumerDiscount } from "../../services/react-query/queries/consumerDiscount";
import NavigationService, {
  RootStackParamList,
} from "../../navigation/NavigationService";
import LoadingAnimation from "../../components/base/LoadingAnimation";

type OrderDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "OrderDetails"
>;

const OrderDetails = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("upcoming");
  const [operation, setOperation] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute<OrderDetailsScreenRouteProp>();
  const { discountId, merchantId, consumerId } = route.params;
  console.log(`discountId: ${discountId}`);
  console.log(`merchantId: ${merchantId}`);
  console.log(`consumerId: ${consumerId}`);

  const { data: consumerDiscount, error: customerDiscounterror } =
    getConsumerDiscountByMerchantConsumerDiscount(
      merchantId,
      discountId,
      consumerId
    );

  console.log(`consumerDiscount: ${consumerDiscount}`);
  console.log(consumerDiscount?._id || "");

  const getMenuDiscountsResult = GetMenuDiscountsByMerchantAndDiscount(
    consumerDiscount?.merchant?._id || "",
    consumerDiscount?.discount?._id || ""
  );

  useEffect(() => {
    setIsLoading(false);
  }, [getMenuDiscountsResult]);

  const { mutate: updateDiscountStatus } = UpdateConsumerDiscount();

  const menuDiscounts =
    consumerDiscount !== undefined ? getMenuDiscountsResult.data || [] : [];

  useEffect(() => {
    setStatus(consumerDiscount?.status || "upcoming");
    setOperation(consumerDiscount?.updatedAt || new Date());
  }, [consumerDiscount]);

  const handlePressConfirm = () => {
    if (status === "redeemed") {
      NavigationService.navigate("MerchantHome");
      console.log("Navigating to home because status is redeemed...");
      return;
    }

    if (!modalVisible || status === "upcoming") {
      setOpenSuccess(true);
      if (consumerDiscount?._id) {
        const updatedDiscount = {
          ...consumerDiscount,
          status: "redeemed" as "upcoming" | "redeemed" | "cancelled",
        };

        updateDiscountStatus({ consumerDiscount: updatedDiscount });
        setOpenSuccess(true);

        setStatus("redeemed");
        setOperation(new Date());
      } else {
        console.error("ConsumerDiscount ID is undefined.");
      }
    } else {
      NavigationService.navigate("MerchantHome");
    }
  };

  const discount = consumerDiscount?.discount;
  const consumer = consumerDiscount?.consumer;

  const generatedProps = {
    handlePressConfirm: handlePressConfirm,
    openSuccess: openSuccess,
    setOpenSuccess: setOpenSuccess,
    modalVisible: modalVisible,
    setModalVisible: setModalVisible,
    customerName: `${consumer?.user.firstName} ${consumer?.user.lastName}`,
    couponNo: consumerDiscount?.qrIdentification || "",
    discount: discount?.percentDiscount || 0,
    date: discount?.validFromDate
      ? new Date(discount.validFromDate)
      : new Date(),
    validFromTime: discount?.validFromTime
      ? new Date(discount.validFromTime)
      : new Date(),
    validToTime: discount?.validToTime
      ? new Date(discount.validToTime)
      : new Date(),
    status: status,
    operation: operation,
    menus: menuDiscounts.map((menuDiscount) => menuDiscount.menu) || [],
  };

  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <OrderDetailsView {...generatedProps} />
  );
};

export default OrderDetails;
