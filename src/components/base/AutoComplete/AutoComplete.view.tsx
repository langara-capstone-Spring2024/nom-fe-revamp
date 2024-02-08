import React, { useEffect, useRef } from "react";
import styles from "./AutoComplete.style";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import Ionicons from "@expo/vector-icons/Ionicons";

const AutoComplete = (props: AutoCompleteProps) => {
  const { placeholder, value, setValue } = props;

  const ref = useRef<GooglePlacesAutocompleteRef>(null);

  useEffect(() => {
    if (value) {
      ref.current?.setAddressText(value.address || "");
    }
  }, [value]);

  return (
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
      renderLeftButton={() => (
        <Ionicons
          name="location"
          size={24}
          color="black"
          style={{ marginRight: 8 }}
        />
      )}
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
  );
};

export default AutoComplete;
