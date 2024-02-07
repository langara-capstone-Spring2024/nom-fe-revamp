import React from "react";
import { View, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import NavigationService from "../../navigation/NavigationService";
import styles from "./styles";
import Button from "../../components/base/Button";

interface ButtonItem {
  name: string;
  onPress: () => void;
}
const Stories = () => {
  const collections: ButtonItem[] = [
    /*_PLOP_INJECT_COMPONENT_SCREEN */
{name: 'UserAvatar', onPress: () => NavigationService.navigate('UserAvatarCollection')},
    {
      name: "DateTimeSelector",
      onPress: () => NavigationService.navigate("DateTimeSelectorCollection"),
    },
    {
      name: "Checkbox",
      onPress: () => NavigationService.navigate("CheckboxCollection"),
    },
    {
      name: "Typography",
      onPress: () => NavigationService.navigate("TypographyCollection"),
    },
    {
      name: "Button",
      onPress: () => NavigationService.navigate("ButtonCollection"),
    },
    {
      name: "FormikTextInputField",
      onPress: () =>
        NavigationService.navigate("FormikTextInputFieldCollection"),
    },
    {
      name: "TextInputField",
      onPress: () => NavigationService.navigate("TextInputFieldCollection"),
    },
  ];

  const renderItem = ({ item }: { item: ButtonItem }) => (
    <Button
      variant="primary"
      buttonSize="lg"
      text={item.name}
      onPress={item.onPress}
      takeFullWidth
      iconPosition="right"
      icon={<AntDesign name="arrowright" size={24} color="white" />}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Stories;
