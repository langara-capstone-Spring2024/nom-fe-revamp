import NavigationService from "../../navigation/NavigationService";
import ScannerView from "./Scanner.view";
import { useState } from "react";

const Scanner = () => {
  const [merchantId, setMerchantId] = useState<string>("");
  const [discountId, setDiscountId] = useState<string>("");
  const [consumerId, setConsumerId] = useState<string>("");

  const handleChange = (result: string): boolean => {
    try {
      const scannedData = JSON.parse(result);
      console.log(`merchant: ${scannedData.merchant}`);
      console.log(`discount: ${scannedData.discount}`);
      console.log(`consumer: ${scannedData.consumer}`);

      const merchant = scannedData.merchant;
      const discount = scannedData.discount;
      const consumer = scannedData.consumer;

      setMerchantId(merchant);
      setDiscountId(discount);
      setConsumerId(consumer);

      return true;
    } catch (error) {
      return false;
    }
  };

  console.log(merchantId);

  const handleClose = () => {
    NavigationService.navigate("MerchantHome");
  };

  const handleSuccess = () => {
    NavigationService.navigate("OrderDetails", {
      merchantId: merchantId,
      discountId: discountId,
      consumerId: consumerId,
    });
  };

  const generatedProps = {
    handleChange,
    handleClose,
    handleSuccess,
    consumerId,
    merchantId,
    discountId,
  };
  return <ScannerView {...generatedProps} />;
};

export default Scanner;
