import { View, Text, Modal, SafeAreaView } from "react-native";
import createStyles from "./SampleScreen.style";
import { SampleScreenGeneratedProps } from "./SampleScreen.props";
import Button from "../../components/base/Button";
import NavigationService from "../../navigation/NavigationService";
import React, { useMemo } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "react-native-paper";

const SampleScreen = (props: SampleScreenGeneratedProps) => {
  const {
    isVisible,
    isErrorOnMerchants,
    merchants,
    onLogout,
    handleToggleModal,
  } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SampleScreen</Text>
      <Button
        variant="primary"
        buttonSize="lg"
        text="Logout"
        onPress={() => onLogout()}
      />
      <Button
        variant="primary"
        buttonSize="lg"
        text="Change password"
        onPress={() => NavigationService.navigate("ChangePassword")}
      />
      <Button
        variant="primary"
        buttonSize="lg"
        text="Get Merchants"
        onPress={handleToggleModal}
      />
      <Button
        variant="primary"
        buttonSize="lg"
        text="Ad Maker"
        onPress={() => NavigationService.navigate("AdMaker")}
      />
      <Modal visible={isVisible}>
        <SafeAreaView style={{ alignItems: "center" }}>
          <View style={{ padding: 16 }}>
            <Button
              variant="primary"
              buttonSize="lg"
              text="Close"
              onPress={handleToggleModal}
              takeFullWidth
            />
            {isErrorOnMerchants ? (
              <Text>Error!</Text>
            ) : (
              <FlatList
                data={merchants}
                renderItem={({ item, index }) => (
                  <View key={index}>
                    <Text style={{ color: theme.colors.primary }}>
                      {item.user.email}
                    </Text>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.address}</Text>
                    <Text>{item.opening}</Text>
                    <Text>{item.closing}</Text>
                  </View>
                )}
                ItemSeparatorComponent={() => (
                  <View style={{ height: 1, backgroundColor: "gray" }}></View>
                )}
              />
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SampleScreen;
