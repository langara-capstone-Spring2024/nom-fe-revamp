import React, { useEffect, useRef } from "react";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import { theme as t } from "../../../utils/Theme";
import { View } from "react-native";
import Typography from "../Typography";
import styles from "./AutoComplete.style";

const AutoComplete = (props: AutoCompleteProps) => {
  const { label, placeholder, value, setValue, error } = props;

  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  useEffect(() => {
    if (value) {
      ref.current?.setAddressText(value.address || "");
    }
  }, [value]);

  return (
    <View>
      {label && (
        <Typography variant="label2" otherStyle={styles.label}>
          {label}
        </Typography>
      )}
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder={placeholder || ""}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY,
          language: "en",
        }}
        onPress={(data, details) => {
          if (details) {
            setValue({
              address: data.description,
              longitude: details.geometry.location.lng,
              latitude: details.geometry.location.lat,
            });
          }
        }}
        fetchDetails
        enablePoweredByContainer={false}
        suppressDefaultStyles
        disableScroll
        styles={{
          textInputContainer: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: t.Border.neutral,
            backgroundColor: "white",
            flexDirection: "row",
          },
          textInput: {
            fontSize: 16,
            flex: 1,
          },
          row: {
            padding: 16,
            fontSize: 16,
            backgroundColor: "white",
          },
          separator: {
            height: 2,
          },
          listView: {
            borderRadius: 8,
            marginTop: 8,
          },
        }}
      />
      {error && (
        <Typography variant="bodyXs" color="error-medium">
          {error}
        </Typography>
      )}
    </View>
  );
};

export default AutoComplete;
