import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { QueryClientProvider } from "@tanstack/react-query";
import { RNQueryClient } from "./src/services/react-query/query-client";
import Navigator from "./src/navigation";
import { StripeProvider } from "@stripe/stripe-react-native";
//@ts-ignore
import { STRIPE_PB_KEY } from "@env";

const Entrypoint = () => {
  const [fontsLoaded] = useFonts({
    bold: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    semiBold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    regular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    PublicSansRegular: require("./assets/fonts/PublicSans-VariableFont_wght.ttf"),
    PublicSansItalic: require("./assets/fonts/PublicSans-Italic-VariableFont_wght.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  console.log("PB_KEY: ", STRIPE_PB_KEY);

  return (
    <QueryClientProvider client={RNQueryClient}>
      <StripeProvider publishableKey={STRIPE_PB_KEY}>
        <Navigator />
      </StripeProvider>
    </QueryClientProvider>
  );
};

export default Entrypoint;
