import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { QueryClientProvider } from "@tanstack/react-query";
import { RNQueryClient } from "./src/services/react-query/query-client";
import { useStore } from "./src/store";

// import { useLoginMutation } from "./src/services/react-query/queries/auth";

export default function App() {
  const { setTokens, setIsLoggedIn } = useStore((state) => ({
    setTokens: state.setTokens,
    setIsLoggedIn: state.setIsLoggedIn,
    isLoggedIn: state.isLoggedIn,
  }));

  const [fontsLoaded] = useFonts({
    bold: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    semiBold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    regular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    PublicSansRegular: require("./assets/fonts/PublicSans-VariableFont_wght.ttf"),
    PublicSansItalic: require("./assets/fonts/PublicSans-Italic-VariableFont_wght.ttf"),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  const handleSubmit = async () => {
    // Here you can handle the submission of email and password, like sending them to a server
    try {
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.log(err.data?.message);
    }
  };

  if (!fontsLoaded) return null;
  // const loginMutation = useLoginMutation();

  return (
    <QueryClientProvider client={RNQueryClient}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button title="Submit" onPress={handleSubmit} />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
