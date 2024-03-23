import { GestureResponderEvent } from "react-native";
import { MenuListProps } from "../../components/base/MenuList/MenuList.props";
import { Menu } from "../../types/Menus";

export interface OrderDetailsGeneratedProps {
  handlePressConfirm?:
    | ((event?: GestureResponderEvent | undefined) => void)
    | undefined;
  openSuccess: boolean;
  setOpenSuccess: (v: boolean) => void;
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  customerName: string;
  couponNo: string;
  discount: number;
  date: Date;
  validFromTime: Date;
  validToTime: Date;
  status: string;
  operation: Date;
  menus: Menu[];
}
