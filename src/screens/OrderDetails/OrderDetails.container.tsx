import React, { useState } from "react";
import OrderDetailsView from "./OrderDetails.view";
import { useStore } from "../../store";
import { GetConsumerDiscountsById } from "../../services/react-query/queries/consumerDiscount";
import { ConsumerDiscount } from "../../types/ConsumerDiscount";
import { Discount } from "../../types/Discounts";
import { GetMenuDiscountsByMerchantAndDiscount } from "../../services/react-query/queries/menuDiscount";
import { View } from "react-native";

const OrderDetails = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { data: consumerDiscount, error } = GetConsumerDiscountsById(
    "65f25b90eef36f50cdf37443"
  );
  console.log(consumerDiscount);

  const { data: menuDiscounts, error: menuDiscountError } = GetMenuDiscountsByMerchantAndDiscount("65c6c8b74eb7c69237fc8238", "65f255c452bc2faaeca9fbe3")
  console.log(menuDiscounts)

  const { prev, next, page } = useStore((state) => ({
    prev: state.previous,
    next: state.next,
    page: state.page,
  }));

  const handlePressConfirm = () => {
    if (!modalVisible) {
      setOpenSuccess(true);
    } else {
      console.log("Navigating to home...");
    }
  };

  const discount = consumerDiscount?.discount

  const generatedProps = {
    handlePressConfirm: handlePressConfirm,
    openSuccess: openSuccess,
    setOpenSuccess: setOpenSuccess,
    modalVisible: modalVisible,
    setModalVisible: setModalVisible,
    customerName: `${discount?.merchant.user.firstName} ${discount?.merchant.user.lastName}`,
    couponNo:  consumerDiscount?.qrIdentification || "",
    discount: discount?.percentDiscount || 0,
    date: discount?.validFromDate || new Date(),
    validFromTime: discount?.validFromTime || new Date(),
    validToTime: discount?.validToTime || new Date(),
    status: consumerDiscount?.status || "",
    operation: consumerDiscount?.updatedAt || new Date(),
    menus: []
  };

  return <OrderDetailsView {...generatedProps} />;
};

export default OrderDetails;
