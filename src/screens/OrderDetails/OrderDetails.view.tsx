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
  } = props;

  const RightItemComponent = () => (
    <View>
      <Typography color="inactive">1 Item</Typography>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.orderCardContainer}>
        <OrderCard
          customerName="John Doe"
          couponNo="123456"
          discount={10}
          date={new Date()}
          status="Upcoming"
          operation={new Date()}
          validFromTime={new Date()}
          validToTime={new Date()}
        />
      </View>

      <View>
        <Accordion
          title="Items"
          hasRightItem={true}
          rightItem={<RightItemComponent />}
        >
          <MenuList
            menuId="1"
            menuImage="https://picsum.photos/360?random=1"
            menuName="Chicken Wings"
            menuPrice={17.99}
            handleSelect={() => {}}
            selected={false}
            hideRadioButton={true}
          />
        </Accordion>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          buttonSize="lg"
          text={modalVisible ? "Home" : "Confirm Coupon"}
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
