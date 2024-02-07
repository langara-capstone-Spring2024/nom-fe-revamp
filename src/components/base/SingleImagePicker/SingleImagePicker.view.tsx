import { View, Image, Pressable } from "react-native";
import { SingleImagePickerProps } from "./SingleImagePicker.props";
import styles from "./SingleImagePicker.style";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const SingleImagePicker = (props: SingleImagePickerProps) => {
  const { image, setImage } = props;

  const handlePickImage = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 0,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (
      !result.canceled &&
      result.assets[0].uri &&
      result.assets[0].fileName &&
      result.assets[0].mimeType
    ) {
      setImage({
        uri: result.assets[0].uri,
        fileName: result.assets[0].fileName,
        type: result.assets[0].mimeType,
      });
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Pressable
          onPress={handlePickImage}
          style={[styles.item, styles.button]}
        >
          <Image source={{ uri: image.uri }} style={styles.image} />
        </Pressable>
      ) : (
        <Pressable
          onPress={handlePickImage}
          style={[styles.item, styles.button]}
        >
          <Ionicons name="images" size={50} />
        </Pressable>
      )}
    </View>
  );
};

export default SingleImagePicker;
