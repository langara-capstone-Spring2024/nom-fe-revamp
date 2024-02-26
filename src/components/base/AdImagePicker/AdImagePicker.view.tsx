import { View, Image, Pressable } from "react-native";
import { AdImagePickerProps } from "./AdImagePicker.props";
import styles from "./AdImagePicker.style";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import Typography from "../Typography";

const AdImagePicker = (props: AdImagePickerProps) => {
  const { image, setImage } = props;
  const noBorderStyle = image && styles.noBorderContainer;

  const handlePickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 0,
      allowsEditing: true,
      aspect: [1, 1],
    });
    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
        fileName: result.assets[0].fileName,
        type: result.assets[0].mimeType,
      });
    }
  };

  return (
    <View style={[styles.container, noBorderStyle]}>
      {image ? (
        <Pressable
          onPress={handlePickImage}
          style={[styles.item, styles.button]}>
          <Image source={{ uri: image.uri }} style={styles.image} />
        </Pressable>
      ) : (
        <Pressable
          onPress={handlePickImage}
          style={[styles.item, styles.button]}>
          <Ionicons name="images" size={70} color={"#939393"} />
          <Typography variant="body" color="primary" otherStyle={styles.spacer}>
            Upload image
          </Typography>
        </Pressable>
      )}
    </View>
  );
};

export default AdImagePicker;
