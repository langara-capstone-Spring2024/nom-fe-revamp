import { GestureResponderEvent } from "react-native";
import { MenuListProps } from "../../components/base/MenuList/MenuList.props";
import { Menus } from "../../types/Menus";

export interface OrderDetailsGeneratedProps {
  handlePressConfirm?:
    | ((event?: GestureResponderEvent | undefined) => void)
    | undefined;
  openSuccess: boolean;
  setOpenSuccess: (v: boolean) => void;
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  customerName: string, 
  couponNo: string,
  discount: number, 
  date: Date, 
  validFromTime: Date, 
  validToTime: Date,
  status: String, 
  operation: Date,
  menus: Menus[],
  setMenuDiscountList: (text: string ) => void

}
