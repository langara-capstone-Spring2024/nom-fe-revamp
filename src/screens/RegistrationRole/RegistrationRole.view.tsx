import { View, SafeAreaView, ScrollView, Image, Pressable } from "react-native";
import createStyles from "./RegistrationRole.style";
import { RegistrationRoleGeneratedProps } from "./RegistrationRole.props";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { theme as t } from "../../utils/Theme";
import Button from "../../components/base/Button";
import Typography from "../../components/base/Typography";

const RegistrationRole = (props: RegistrationRoleGeneratedProps) => {
  const { selectedRole, setSelectedRole, handleContinue } = props;

  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.Surface.default }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 16,
          paddingTop: 64,
          paddingBottom: 32,
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 32 }}>
          <View>
            <View style={{ width: "50%", alignSelf: "center" }}>
              <Typography variant="title2" alignment="center" weight="700">
                Which user are you?
              </Typography>
            </View>
            <Typography alignment="center">
              Select which type of user you are.....
            </Typography>
          </View>
          <View style={{ flexDirection: "row", gap: 16 }}>
            <Pressable
              onPress={() => setSelectedRole("merchant")}
              style={{ flex: 1, gap: 8 }}
            >
              <View
                style={{
                  aspectRatio: 189 / 263,
                }}
              >
                <Image
                  source={
                    selectedRole === "merchant"
                      ? require("../../../assets/merchant-c.png")
                      : require("../../../assets/merchant-g.png")
                  }
                  style={[
                    styles.image,
                    selectedRole === "merchant"
                      ? {
                          borderWidth: 3,
                          borderColor: t.Border["brand-medium"],
                        }
                      : { borderWidth: 1, borderColor: t.Border.neutral },
                    {
                      backgroundColor:
                        selectedRole === "merchant"
                          ? t.Surface["brand-light"]
                          : undefined,
                    },
                  ]}
                />
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioOut,
                      {
                        borderColor:
                          selectedRole === "merchant"
                            ? t.Content["info-medium"]
                            : t.Border.contrast,
                      },
                    ]}
                  ></View>
                  <View
                    style={[
                      styles.radioIn,
                      {
                        backgroundColor:
                          selectedRole === "merchant"
                            ? t.Content["info-medium"]
                            : undefined,
                      },
                    ]}
                  ></View>
                </View>
              </View>
              <Typography
                variant="label2"
                alignment="center"
                color={selectedRole === "merchant" ? "brand-medium" : undefined}
              >
                Merchant
              </Typography>
            </Pressable>
            <Pressable
              onPress={() => setSelectedRole("customer")}
              style={{ flex: 1, gap: 8 }}
            >
              <View
                style={{
                  aspectRatio: 189 / 263,
                }}
              >
                <Image
                  source={
                    selectedRole === "customer"
                      ? require("../../../assets/consumer-c.png")
                      : require("../../../assets/consumer-g.png")
                  }
                  style={[
                    styles.image,
                    selectedRole === "customer"
                      ? {
                          borderWidth: 3,
                          borderColor: t.Border["brand-medium"],
                        }
                      : { borderWidth: 1, borderColor: t.Border.neutral },
                    {
                      backgroundColor:
                        selectedRole === "customer"
                          ? t.Surface["brand-light"]
                          : undefined,
                    },
                  ]}
                />
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioOut,
                      {
                        borderColor:
                          selectedRole === "customer"
                            ? t.Content["info-medium"]
                            : t.Border.contrast,
                      },
                    ]}
                  ></View>
                  <View
                    style={[
                      styles.radioIn,
                      {
                        backgroundColor:
                          selectedRole === "customer"
                            ? t.Content["info-medium"]
                            : undefined,
                      },
                    ]}
                  ></View>
                </View>
              </View>
              <Typography
                variant="label2"
                alignment="center"
                color={selectedRole === "customer" ? "brand-medium" : undefined}
              >
                Customer
              </Typography>
            </Pressable>
          </View>
        </View>
        <View>
          <Button
            text="Continue"
            onPress={handleContinue}
            isDisabled={!selectedRole && true}
            takeFullWidth
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationRole;
