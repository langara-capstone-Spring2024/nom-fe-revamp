import { GestureResponderEvent } from "react-native";

export interface OrderDetailsGeneratedProps {
  handlePressConfirm?:
    | ((event?: GestureResponderEvent | undefined) => void)
    | undefined;
  openSuccess: boolean;
  setOpenSuccess: (v: boolean) => void;
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  customerName: String, 
  couponNo: string,
  discount: number, 
  date: Date, 
  validFromTime: Date, 
  validToTime: Date,
  status: String, 
  operation: Date,
  menuId: string;
  menuImage: string;
  menuName: string;
  menuPrice: number;
  selected?: boolean;
  handleSelect: (menuId: string) => void;
  hideRadioButton: boolean;
}
