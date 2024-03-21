import { ConsumerDiscount } from "../../types/ConsumerDiscount";
import { MenuDiscount } from "../../types/MenuDiscount";

export interface ConsumerDiscountGeneratedProps {
  isVisible: boolean;
  isErrorUpdateConsumerDiscount: boolean;
  consumerDiscount: ConsumerDiscount | null;
  menuDiscounts: MenuDiscount[];
  handleOpen: () => void;
  handleClose: () => void;
  handleDownload: () => void;
  handleCancel: () => void;
}
