import React, { useEffect, useRef } from "react";
import styles from "./AutoComplete.style";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import { Text, View } from "react-native";

const AutoComplete = (props: AutoCompleteProps) => {
  const { label, placeholder, value, setValue, error } = props;

  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  useEffect(() => {
    if (value && value.address) {
      ref.current?.setAddressText(value.address);
    } else {
      ref.current?.setAddressText("");
    }
  }, [value]);

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
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
        styles={{
          textInputContainer: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "lightgray",
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
      {error && <Text style={[styles.error, { color: "red" }]}>{error}</Text>}
    </View>
  );
};

export default AutoComplete;
