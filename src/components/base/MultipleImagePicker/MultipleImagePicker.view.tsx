import { View, Pressable, Image, Text } from "react-native";
import { MultipleImagePickerProps } from "./MultipleImagePicker.props";
import styles from "./MultipleImagePicker.style";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const MultipleImagePicker = (props: MultipleImagePickerProps) => {
  const { images, setImages } = props;

  const handlePickImages = async () => {
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
  };

  return (
    <>
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
              <Ionicons name="images" size={25} />
            </View>
          </Pressable>
        )}
      </View>
      {1 < images.length && (
        <View style={styles.list}>
          {images.slice(1, 6).map((image, index) => (
            <Pressable
              onPress={handlePickImages}
              style={styles.item}
              key={index}
            >
              <Image
                source={{ uri: image.uri }}
                style={[styles.image, { borderRadius: 8 }]}
              />
              {6 < images.length && index === 4 && (
                <View style={styles.background}>
                  <Text style={styles.text}>+ {images.length - 6}</Text>
                </View>
              )}
            </Pressable>
          ))}
        </View>
      )}
    </>
  );
};

export default MultipleImagePicker;
