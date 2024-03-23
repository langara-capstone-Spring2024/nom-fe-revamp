import { View, Pressable, Image, LayoutChangeEvent } from "react-native";
import { MultipleImagePickerProps } from "./MultipleImagePicker.props";
import styles from "./MultipleImagePicker.style";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Typography from "../Typography";

const MultipleImagePicker = (props: MultipleImagePickerProps) => {
  const { images, setImages, error } = props;

  const [width, setWidth] = useState<number | undefined>(undefined);
  const [innerError, setInnerError] = useState<string>("");

  const handlePickImages = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0,
      });

      if (!result.canceled) {
        setImages(
          result.assets.map((asset) => ({
            uri: asset.uri,
            fileName: asset.fileName,
            type: asset.mimeType,
          }))
        );
      }

      setInnerError("");
    } catch (error) {
      setInnerError("Failed to upload");
    }
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    setWidth((event.nativeEvent.layout.width - 32) / 5);
  };

  return (
    <View>
      <View>
        {0 < images.length ? (
          <Pressable onPress={handlePickImages}>
            <View style={styles.button}>
              <Image
                source={{ uri: images[0].uri }}
                style={[styles.image, { borderRadius: 16 }]}
              />
            </View>
          </Pressable>
        ) : (
          <Pressable onPress={handlePickImages}>
            <View style={styles.button}>
              <Ionicons name="image" size={36} color="#939393" />
              <Typography>Upload your photos</Typography>
            </View>
          </Pressable>
        )}
      </View>
      {1 < images.length && (
        <View onLayout={handleLayout} style={styles.listContainer}>
          {images.slice(1, 6).map((image, index) => (
            <Pressable
              onPress={handlePickImages}
              style={[styles.imageContainer, { width: width }]}
              key={index}
            >
              <Image
                source={{ uri: image.uri }}
                style={[styles.image, { borderRadius: 8 }]}
              />
              {6 < images.length && index === 4 && (
                <View style={styles.background}>
                  <Typography variant="title5" color="white-strong">
                    + {images.length - 6}
                  </Typography>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      )}
      {(error || innerError) && (
        <Typography variant="bodyXs" color="error-medium">
          {error || innerError}
        </Typography>
      )}
    </View>
  );
};

export default MultipleImagePicker;
