import { View, ScrollView } from "react-native";
import React from "react";
import Button from "../../components/base/Button";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../utils/Theme";

const ButtonCollection = () => {
  return (
    <ScrollView style={{ padding: 8 }}>
      <View>
        <Button
          variant="primary"
          buttonSize="sm"
          text="Primary Small Full Width"
          takeFullWidth
        />

        <Button
          variant="primary"
          buttonSize="md"
          text="Primary Medium With Icon"
          iconPosition="left"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content["white-strong"]}
            />
          }
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="primary"
          buttonSize="lg"
          text="Primary Large Disabled"
          iconPosition="right"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content.inactive}
            />
          }
          isDisabled
        />

        <Button
          variant="secondary"
          buttonSize="sm"
          text="Secondary Small Full Width"
          takeFullWidth
        />

        <Button
          variant="secondary"
          buttonSize="md"
          text="Secondary Medium With Icon"
          iconPosition="left"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content.primary}
            />
          }
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="secondary"
          buttonSize="lg"
          text="Secondary Large Disabled"
          iconPosition="right"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content.inactive}
            />
          }
          isDisabled
        />

        <Button
          variant="ghost"
          buttonSize="sm"
          text="Ghost Small Full Width"
          takeFullWidth
        />

        <Button
          variant="ghost"
          buttonSize="md"
          text="Ghost Medium With Icon"
          iconPosition="left"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content.primary}
            />
          }
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="ghost"
          buttonSize="lg"
          text="Ghost Large Disabled"
          iconPosition="right"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content.inactive}
            />
          }
          isDisabled
        />

        <Button
          variant="error"
          buttonSize="sm"
          text="Error Small Full Width"
          takeFullWidth
        />

        <Button
          variant="error"
          buttonSize="md"
          text="Error Medium With Icon"
          iconPosition="left"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content["error-medium"]}
            />
          }
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="error"
          buttonSize="lg"
          text="Error Large Disabled"
          iconPosition="right"
          icon={
            <Ionicons
              name="planet-outline"
              size={16}
              color={theme.Content.inactive}
            />
          }
          isDisabled
        />
      </View>
    </ScrollView>
  );
};

export default ButtonCollection;
