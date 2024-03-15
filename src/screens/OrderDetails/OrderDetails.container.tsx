import React, { useState } from "react";
import OrderDetailsView from "./OrderDetails.view";
import { useStore } from "../../store";
import { GetConsumerDiscount } from "../../services/react-query/queries/consumerDiscount";
import { ConsumerDiscount } from "../../types/ConsumerDiscount";
import { Discount } from "../../types/Discounts";
import { GetMenuDiscountsByMerchantAndDiscount } from "../../services/react-query/queries/menuDiscount";
import { View } from "react-native";

const OrderDetails = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { data: consumerDiscount, error } = GetConsumerDiscount(
    "65f3cbcb0502554c66ad86e8"
  );

  const { data: menuDiscounts, error: menuDiscountError } = GetMenuDiscountsByMerchantAndDiscount(
    consumerDiscount?.merchant._id || "", 
    consumerDiscount?.discount._id || "")
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
  const consumer = consumerDiscount?.consumer

  const generatedProps = {
    handlePressConfirm: handlePressConfirm,
    openSuccess: openSuccess,
    setOpenSuccess: setOpenSuccess,
    modalVisible: modalVisible,
    setModalVisible: setModalVisible,
    customerName: `${consumer?.user.firstName} ${consumer?.user.lastName}`,
    couponNo:  consumerDiscount?.qrIdentification || "",
    discount: discount?.percentDiscount || 0,
    date: discount?.validFromDate || new Date(),
    validFromTime: discount?.validFromTime || new Date(),
    validToTime: discount?.validToTime || new Date(),
    status: consumerDiscount?.status || "",
    operation: consumerDiscount?.updatedAt || new Date(),
    menus: menuDiscounts?.map(menuDiscount => menuDiscount.menu) || []
  };

  return <OrderDetailsView {...generatedProps} />;
};

export default OrderDetails;
