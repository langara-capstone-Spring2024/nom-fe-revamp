import createStyles from "./ConsumerDiscount.style";
import { ConsumerDiscountGeneratedProps } from "./ConsumerDiscount.props";
import React, { useMemo, useState } from "react";
import { Card, useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Image, LayoutChangeEvent, Modal, Pressable, View } from "react-native";
import Typography from "../../components/base/Typography";
import Button from "../../components/base/Button";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ConsumerDiscount = (props: ConsumerDiscountGeneratedProps) => {
  const {
    isVisible,
    consumerDiscount,
    menuDiscounts,
    handleOpen,
    handleClose,
    handleDownload,
    handleCancel,
  } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [bias, setBias] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          alignItems: "center",
          paddingBottom: 32,
        }}
      >
        {consumerDiscount && (
          <View style={{ gap: 16 }}>
            <Card>
              <View
                onLayout={(event: LayoutChangeEvent) =>
                  height === 0 && setHeight(event.nativeEvent.layout.height)
                }
                style={[
                  styles.headerContainer,
                  {
                    height: height + bias + 32,
                  },
                ]}
              >
                <Image source={require("../../../assets/logo.png")} />
              </View>
              <View style={styles.footerContainer}>
                <Card
                  onLayout={(event: LayoutChangeEvent) =>
                    bias === 0 && setBias(event.nativeEvent.layout.height / 2)
                  }
                  style={[styles.qrcodeContainer, { marginTop: -bias }]}
                >
                  <View style={{ width: "100%", gap: 16 }}>
                    <Image
                      source={{
                        uri: `data:image/jpeg;base64,${consumerDiscount.qrCode}`,
                      }}
                      style={styles.qrcode}
                    />
                    <Typography variant="title5" alignment="center">
                      Nom Bites!
                    </Typography>
                  </View>
                </Card>
                <View style={{ gap: 32, padding: 16 }}>
                  <View style={styles.listContainer}>
                    <View style={styles.itemContainer}>
                      <Typography color="subtle">Name</Typography>
                      <Typography>
                        {consumerDiscount.consumer.user.firstName}{" "}
                        {consumerDiscount.consumer.user.lastName}
                      </Typography>
                    </View>
                    <View style={styles.itemContainer}>
                      <Typography color="subtle">Status</Typography>
                      <View style={styles.statusContainer}>
                        <Typography>{consumerDiscount.status}</Typography>
                      </View>
                    </View>
                    <View style={[styles.itemContainer, { marginBottom: -16 }]}>
                      <Typography color="subtle">Date</Typography>
                      <Typography>
                        {
                          days[
                            new Date(
                              consumerDiscount.discount.validFromDate
                            ).getDay()
                          ]
                        }
                        {", "}
                        {
                          months[
                            new Date(
                              consumerDiscount.discount.validFromDate
                            ).getMonth()
                          ]
                        }{" "}
                        {new Date(
                          consumerDiscount.discount.validFromDate
                        ).getDate()}
                        {", "}
                        {new Date(
                          consumerDiscount.discount.validFromDate
                        ).getFullYear()}
                      </Typography>
                    </View>
                    <View style={styles.itemContainer}>
                      <Typography color="subtle"> </Typography>
                      <Typography>
                        {" ~ "}
                        {
                          days[
                            new Date(
                              consumerDiscount.discount.validToDate
                            ).getDay()
                          ]
                        }
                        {", "}
                        {
                          months[
                            new Date(
                              consumerDiscount.discount.validToDate
                            ).getMonth()
                          ]
                        }{" "}
                        {new Date(
                          consumerDiscount.discount.validToDate
                        ).getDate()}
                        {", "}
                        {new Date(
                          consumerDiscount.discount.validToDate
                        ).getFullYear()}
                      </Typography>
                    </View>
                    <View style={styles.itemContainer}>
                      <Typography color="subtle">Timeslot</Typography>
                      <Typography>
                        {12 <
                        new Date(
                          consumerDiscount.discount.validFromTime
                        ).getHours()
                          ? new Date(
                              consumerDiscount.discount.validFromTime
                            ).getHours() - 12
                          : new Date(
                              consumerDiscount.discount.validFromTime
                            ).getHours()}
                        :
                        {10 <
                        new Date(
                          consumerDiscount.discount.validFromTime
                        ).getMinutes()
                          ? new Date(
                              consumerDiscount.discount.validFromTime
                            ).getMinutes()
                          : "0" +
                            new Date(
                              consumerDiscount.discount.validFromTime
                            ).getMinutes()}{" "}
                        {12 <=
                        new Date(
                          consumerDiscount.discount.validFromTime
                        ).getHours()
                          ? "PM"
                          : "AM"}{" "}
                        -{" "}
                        {12 <
                        new Date(
                          consumerDiscount.discount.validToTime
                        ).getHours()
                          ? new Date(
                              consumerDiscount.discount.validToTime
                            ).getHours() - 12
                          : new Date(
                              consumerDiscount.discount.validToTime
                            ).getHours()}
                        :
                        {10 <
                        new Date(
                          consumerDiscount.discount.validToTime
                        ).getMinutes()
                          ? new Date(
                              consumerDiscount.discount.validToTime
                            ).getMinutes()
                          : "0" +
                            new Date(
                              consumerDiscount.discount.validToTime
                            ).getMinutes()}{" "}
                        {12 <=
                        new Date(
                          consumerDiscount.discount.validToTime
                        ).getHours()
                          ? "PM"
                          : "AM"}
                      </Typography>
                    </View>
                    <View style={styles.itemContainer}>
                      <Typography color="subtle">Discount Rate</Typography>
                      <Typography>
                        {consumerDiscount.discount.percentDiscount * 100}%
                      </Typography>
                    </View>
                  </View>
                  <Button
                    text="View Menu"
                    variant="secondary"
                    onPress={handleOpen}
                    takeFullWidth
                  />
                </View>
              </View>
            </Card>
            <View>
              <Button
                text="Download QR"
                icon={<AntDesign name="download" size={16} color="white" />}
                iconPosition="right"
                onPress={handleDownload}
                takeFullWidth
              />
              <Button
                text="Cancel"
                variant="ghost"
                onPress={handleCancel}
                takeFullWidth
              />
            </View>
          </View>
        )}
      </ScrollView>
      <Modal presentationStyle="pageSheet" visible={isVisible}>
        <View style={styles.modal}>
          <Pressable onPress={handleClose} style={{ alignSelf: "flex-end" }}>
            <Ionicons name="close" size={24} />
          </Pressable>
          <View>
            <Typography variant="title5">Menu</Typography>
          </View>
          <ScrollView>
            {menuDiscounts.map(
              (menuDiscountMapItem, menuDiscountMapItemIndex) => (
                <View
                  style={styles.menuContainer}
                  key={menuDiscountMapItemIndex}
                >
                  <View style={{ flex: 7, gap: 4 }}>
                    <Typography>{menuDiscountMapItem.menu.name}</Typography>
                    <View style={{ flexDirection: "row", gap: 16 }}>
                      <Typography
                        variant="bodySm"
                        color="subtle"
                        otherStyle={{
                          textDecorationLine: "line-through",
                        }}
                      >
                        $
                        {(
                          menuDiscountMapItem.menu.originalPrice *
                          menuDiscountMapItem.discount.percentDiscount
                        ).toFixed(2)}
                      </Typography>
                      <Typography variant="bodySm" color="subtle">
                        ${menuDiscountMapItem.menu.originalPrice}
                      </Typography>
                    </View>
                    <Typography variant="bodySm" color="subtle">
                      {menuDiscountMapItem.menu.description}
                    </Typography>
                  </View>
                  <View style={{ flex: 3 }}>
                    <Image
                      source={{ uri: menuDiscountMapItem.menu.imageUrl }}
                      style={styles.menuImage}
                    />
                  </View>
                </View>
              )
            )}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default ConsumerDiscount;
