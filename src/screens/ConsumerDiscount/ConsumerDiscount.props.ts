import { ConsumerDiscount } from "../../types/ConsumerDiscount";

export interface ConsumerDiscountGeneratedProps {
  consumerDiscount: ConsumerDiscount | null;
  handleDownload: () => void;
  handleCancel: () => void;
}