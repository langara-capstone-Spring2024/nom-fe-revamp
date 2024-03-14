import { GestureResponderEvent } from "react-native";

export interface OrderDetailsGeneratedProps {
  handlePressConfirm?:
    | ((event?: GestureResponderEvent | undefined) => void)
    | undefined;
  openSuccess: boolean;
  setOpenSuccess: (v: boolean) => void;
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
}
