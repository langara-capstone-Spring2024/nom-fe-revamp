import createStyles from "./ConsumerDiscount.style";
import { ConsumerDiscountGeneratedProps } from "./ConsumerDiscount.props";
import React, { useEffect, useMemo, useState } from "react";
import { Card, useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Image, LayoutChangeEvent, View } from "react-native";
import Typography from "../../components/base/Typography";
import Button from "../../components/base/Button";

const ConsumerDiscount = (props: ConsumerDiscountGeneratedProps) => {
  const { consumerDiscount } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [bias, setBias] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
        paddingBottom: 32,
      }}
    >
      {consumerDiscount && (
        <View style={{ gap: 16 }}>
          <Card style={{ width: "100%" }}>
            <View
              onLayout={(event: LayoutChangeEvent) =>
                height === 0 && setHeight(event.nativeEvent.layout.height)
              }
              style={{
                height: height + bias + 32,
                backgroundColor: "red",
                paddingVertical: 16,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image source={require("../../../assets/logo.png")} />
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
                alignItems: "center",
                gap: 16,
              }}
            >
              <Card
                onLayout={(event: LayoutChangeEvent) =>
                  bias === 0 && setBias(event.nativeEvent.layout.height / 2)
                }
                style={{
                  borderRadius: 24,
                  paddingVertical: 16,
                  backgroundColor: "white",
                  alignItems: "center",
                  width: "75%",
                  marginTop: -bias,
                }}
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
                <View style={{ gap: 16 }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="subtle">Name</Typography>
                    <Typography>
                      {consumerDiscount.consumer.user.firstName}{" "}
                      {consumerDiscount.consumer.user.lastName}
                    </Typography>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="subtle">Status</Typography>
                    <View>
                      <Typography>{consumerDiscount.status}</Typography>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="subtle">Date</Typography>
                    <Typography>Name</Typography>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="subtle">Timeslot</Typography>
                    <Typography>Name</Typography>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography color="subtle">Discount Rate</Typography>
                    <Typography>
                      {consumerDiscount.discount.percentDiscount * 100}%
                    </Typography>
                  </View>
                </View>
                <Button text="View Menu" takeFullWidth />
              </View>
            </View>
          </Card>
          <View>
            <Button text="Download QR" takeFullWidth />
            <Button text="Cancel" variant="ghost" takeFullWidth />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default ConsumerDiscount;
