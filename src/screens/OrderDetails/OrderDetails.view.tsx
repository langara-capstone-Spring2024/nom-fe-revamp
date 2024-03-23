import { View, Text, Dimensions } from "react-native";
import createStyles from "./OrderDetails.style";
import { OrderDetailsGeneratedProps } from "./OrderDetails.props";
import React, { useMemo } from "react";
import { useTheme, Modal, Portal } from "react-native-paper";
import OrderCard from "../../components/base/OrderCard";
import List from "../../components/base/List";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Accordion from "../../components/base/Accordion";
import Typography from "../../components/base/Typography";
import MenuList from "../../components/base/MenuList";
import Button from "../../components/base/Button";
import { Check } from "../../components/base/SVG";
import { Menu } from "../../types/Menus";

const OrderDetails = (props: OrderDetailsGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { height: screenHeight } = Dimensions.get("window");

  const overlayHeight = screenHeight - 35;
  const {
    openSuccess,
    setOpenSuccess,
    handlePressConfirm,
    modalVisible,
    setModalVisible,
    customerName,
    couponNo,
    discount,
    date,
    status,
    operation,
    validFromTime,
    validToTime,
    menus,
  } = props;

  const RightItemComponent = () => (
    <View>
      <Typography color="inactive">
        {menus.length} {menus.length > 0 ? "Items" : "Item"}
      </Typography>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.orderCardContainer}>
        <OrderCard
          customerName={customerName}
          couponNo={couponNo}
          discount={discount}
          date={date}
          status={status}
          operation={operation}
          validFromTime={validFromTime}
          validToTime={validToTime}
        />
      </View>

      <View>
        <Accordion
          title="Items"
          hasRightItem={true}
          rightItem={<RightItemComponent />}
        >
          {menus &&
            menus.length > 0 &&
            menus.map((menu: Menu) => (
              <MenuList
                key={menu._id}
                menuId={menu._id}
                menuImage={menu.imageUrl}
                menuName={menu.name}
                menuPrice={Number(menu.originalPrice)}
                handleSelect={() => {}}
                selected={false}
                hideRadioButton={true}
              />
            ))}
        </Accordion>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          buttonSize="lg"
          text={
            modalVisible || status == "redeemed" ? "Home" : "Confirm Coupon"
          }
          takeFullWidth
          onPress={handlePressConfirm}
        />
      </View>

      <Portal>
        <Modal
          style={{
            backgroundColor: "#0000004D",
            flex: 1,
            height: overlayHeight,
          }}
          dismissable={false}
          visible={openSuccess}
          onDismiss={() => setOpenSuccess(false)}
          contentContainerStyle={styles.successModalContainer}
        >
          <Check />
          <Typography variant="title5" otherStyle={styles.successModal}>
            Success!
          </Typography>
          <Typography
            variant="body"
            otherStyle={{ textAlign: "center", marginBottom: 36 }}
          >
            Customer's coupon has been redeemed successfully.
          </Typography>
          <Button
            variant="primary"
            buttonSize="lg"
            text="Back"
            takeFullWidth
            onPress={() => {
              setOpenSuccess(false);
              setModalVisible(true);
            }}
          />
        </Modal>
      </Portal>
    </View>
  );
};

export default OrderDetails;
