import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StripeProps } from "./Stripe.props";
import styles from "./Stripe.style";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import Button from "../../base/Button";
import { AddPaymentMethod } from "../../../services/react-query/queries/stripe";

const Stripe = (props: StripeProps) => {
  const [cardDetails, setCardDetails] = useState<any>({});
  const { createPaymentMethod } = useStripe();
  const [error, setError] = useState<string | null>(null);

  const { mutate, data, isSuccess, isError } = AddPaymentMethod();

  const handleSubmit = async () => {
    try {
      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: "Card",
      });

      if (error) {
        console.error("Error creating payment method:", error.message);
        setError(error.message);
      } else {
        // console.log("Payment Method created:", paymentMethod);

        mutate(paymentMethod.id);
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
