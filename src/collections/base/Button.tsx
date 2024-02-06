import { View, ScrollView } from "react-native";
import React from "react";
import Button from "../../components/base/Button";
import { Ionicons } from "@expo/vector-icons";

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
          icon={<Ionicons name="planet-outline" size={16} color="white" />}
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="primary"
          buttonSize="lg"
          text="Primary Large Disabled"
          iconPosition="right"
          icon={<Ionicons name="planet-outline" size={16} color="#939393" />}
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
          icon={<Ionicons name="planet-outline" size={16} color="white" />}
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="secondary"
          buttonSize="lg"
          text="Secondary Large Disabled"
          iconPosition="right"
          icon={<Ionicons name="planet-outline" size={16} color="#939393" />}
          isDisabled
        />

        <Button
          variant="tertiary"
          buttonSize="sm"
          text="Tertiary Small Full Width"
          takeFullWidth
        />

        <Button
          variant="tertiary"
          buttonSize="md"
          text="Tertiary Medium With Icon"
          iconPosition="left"
          icon={<Ionicons name="planet-outline" size={16} color="black" />}
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="tertiary"
          buttonSize="lg"
          text="Tertiary Large Disabled"
          iconPosition="right"
          icon={<Ionicons name="planet-outline" size={16} color="#D4D4D4" />}
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
          icon={<Ionicons name="planet-outline" size={16} color="black" />}
          onPress={() => console.log("Button pressed")}
        />

        <Button
          variant="ghost"
          buttonSize="lg"
          text="Ghost Large Disabled"
          iconPosition="right"
          icon={<Ionicons name="planet-outline" size={16} color="#D4D4D4" />}
          isDisabled
        />
      </View>
    </ScrollView>
  );
};

export default ButtonCollection;
