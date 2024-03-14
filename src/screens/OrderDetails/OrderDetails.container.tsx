import React, { useState } from "react";
import OrderDetailsView from "./OrderDetails.view";
import { useStore } from "../../store";

const OrderDetails = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const generatedProps = {
    handlePressConfirm: handlePressConfirm,
    openSuccess: openSuccess,
    setOpenSuccess: setOpenSuccess,
    modalVisible: modalVisible,
    setModalVisible: setModalVisible,
  };

  return <OrderDetailsView {...generatedProps} />;
};

export default OrderDetails;
