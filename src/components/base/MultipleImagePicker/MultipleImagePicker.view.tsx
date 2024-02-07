import { View, Pressable, Image } from "react-native";
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

  const handleRemoveImage = (index: number) => {
    setImages((oldValues) =>
      oldValues.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePickImages} style={styles.item}>
        <View style={styles.button}>
          <Ionicons name="images" size={25} />
        </View>
      </Pressable>
      {images.map((image, index) => (
        <Pressable
          onPress={() => handleRemoveImage(index)}
          style={styles.item}
          key={index}
        >
          <Image source={{ uri: image.uri }} style={styles.image} />
        </Pressable>
      ))}
    </View>
  );
};

export default MultipleImagePicker;
