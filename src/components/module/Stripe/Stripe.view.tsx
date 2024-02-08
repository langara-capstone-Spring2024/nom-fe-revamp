import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StripeProps } from "./Stripe.props";
import styles from "./Stripe.style";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import axios from "axios";
import Button from "../../base/Button";
import { apiClient } from "../../../services/client";
import { useStore } from "../../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stripe = (props: StripeProps) => {
  const [cardDetails, setCardDetails] = useState<any>({});
  const { createPaymentMethod } = useStripe();
  const [error, setError] = useState<string | null>(null);
  const accessToken = useStore((state) => state.accessToken);
  console.log("ACCESS TOKEN", accessToken);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("accessToken");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    console.log(getData());
  }, []);
  const handleSubmit = async () => {
    try {
      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: "Card",
      });

      if (error) {
        console.error("Error creating payment method:", error.message);
        setError(error.message);
      } else {
        console.log("Payment Method created:", paymentMethod);

        await apiClient.post("api/stripe-card", {
          paymentMethodId: paymentMethod.id,
        });

        console.log("Payment method sent to backend successfully");
      }
    } catch (error) {
      console.error("Error creating payment method:", error);
      setError(error as string | null);
    }
  };

  return (
    <View style={styles.container}>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
      />
      <Text>Use 4242 4242 4242 4242 in Card Number</Text>
      <Text>Use any future date in expiry</Text>
      <Text>Use any three digit number in cvv</Text>
      <Button
        variant="primary"
        buttonSize="sm"
        text="Add Card"
        takeFullWidth
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Stripe;
