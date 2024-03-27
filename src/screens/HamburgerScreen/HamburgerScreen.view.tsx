import { View, Text, TouchableOpacity } from "react-native";
import createStyles from "./HamburgerScreen.style";
import { HamburgerScreenGeneratedProps } from "./HamburgerScreen.props";
import React, { useMemo } from "react";
import { theme as t } from "../../utils/Theme";
import { useTheme } from "react-native-paper";
import List from "../../components/base/List";
import { Entypo } from "@expo/vector-icons";
import UserAvatar from "../../components/base/UserAvatar";
import Typography from "../../components/base/Typography";
import { Switch } from "react-native-switch";

const HamburgerScreen = (props: HamburgerScreenGeneratedProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    onLogout,
    merchantName,
    merchantImg,
    consumerFirstName,
    consumerLastName,
    role,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {role === "merchant" ? (
          <View style={styles.header}>
            <View>
              <Typography variant="title2">{merchantName}</Typography>
              {/* <Typography variant="title2">Edwards</Typography> */}
            </View>
            <UserAvatar source={merchantImg} sizing="large" />
          </View>
        ) : role === "consumer" ? (
          <View style={styles.header}>
            <View>
              <Typography variant="title2">{consumerFirstName}</Typography>
              <Typography variant="title2">{consumerLastName}</Typography>
            </View>
            <UserAvatar source={merchantImg} sizing="large" />
          </View>
        ) : null}
      </View>
      <View style={styles.content}>
        <List
          title={"Manage Account"}
          hasRightIcon
          rightIcon={
            <Entypo name="chevron-right" size={24} color={t.Content.inactive} />
          }
        ></List>
        <List
          title={"Payment"}
          hasRightIcon
          rightIcon={
            <Entypo name="chevron-right" size={24} color={t.Content.inactive} />
          }
        ></List>
        <List
          title={"Settings"}
          hasRightIcon
          rightIcon={
            <Entypo name="chevron-right" size={24} color={t.Content.inactive} />
          }
        ></List>
        <List
          title={"About Us"}
          hasRightIcon
          rightIcon={
            <Entypo name="chevron-right" size={24} color={t.Content.inactive} />
          }
        ></List>
        <List
          title={"Terms of Use"}
          hasRightIcon
          rightIcon={
            <Entypo name="chevron-right" size={24} color={t.Content.inactive} />
          }
          isLast
        ></List>
      </View>
      <View style={[styles.content, styles.footer]}>
        <TouchableOpacity onPress={() => onLogout()}>
          <List title={"Logout"} isLast titleColor="brand-strong" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HamburgerScreen;
