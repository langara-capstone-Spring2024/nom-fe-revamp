import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { StripeProps } from "./Stripe.props";
import styles from "./Stripe.style";
import { CardField, useStripe } from "@stripe/stripe-react-native";
//@ts-ignore
import { STRIPE_PB_KEY } from "@env";

const Stripe = (props: StripeProps) => {
  const [cardDetails, setCardDetails] = useState<any>({});
  const { createPaymentMethod, createToken } = useStripe();
  const [error, setError] = useState<string | null>(null);

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
        // Proceed with further actions, such as sending the paymentMethod to your backend
      }
    } catch (error) {
      console.error("Error creating payment method:", error);
      setError(error as string | null);
    }
  };

  return (
    <View>
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Stripe;
