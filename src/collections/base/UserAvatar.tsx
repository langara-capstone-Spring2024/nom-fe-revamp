import { StyleSheet } from "react-native";
import React from "react";
import UserAvatar from "../../components/base/UserAvatar";
import { ScrollView } from "react-native-gesture-handler";

const UserAvatarCollection = () => {
  return (
    <ScrollView>
      <UserAvatar sizing="small" title="TT" />
      <UserAvatar sizing="medium" title="TT" />
      <UserAvatar sizing="large" title="TT" />
      <UserAvatar sizing="xlarge" title="TT" />
      <UserAvatar
        source="https://picsum.photos/200"
        sizing="small"
        title="TT"
      />
      <UserAvatar
        source="https://picsum.photos/200"
        sizing="medium"
        title="TT"
      />
      <UserAvatar
        source="https://picsum.photos/200"
        sizing="large"
        title="TT"
      />
      <UserAvatar
        source="https://picsum.photos/200"
        sizing="xlarge"
        title="TT"
      />
    </ScrollView>
  );
};

export default UserAvatarCollection;

const styles = StyleSheet.create({});
