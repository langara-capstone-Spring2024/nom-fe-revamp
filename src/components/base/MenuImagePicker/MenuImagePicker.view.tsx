import { View, Image, Pressable } from "react-native";
import { MenuImagePickerProps } from "./MenuImagePicker.props";
import createStyles from "./MenuImagePicker.style";
import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Typography from "../Typography";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";

const MenuImagePicker = (props: MenuImagePickerProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
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
    if (!result.canceled) {
      setImage({
        uri: result.assets[0].uri,
        fileName: result.assets[0].fileName,
        type: result.assets[0].mimeType,
      });
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
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
            <Entypo name="image-inverted" size={24} color="#939393" />
          </Pressable>
        )}
      </View>
      <View>
        {image ? (
          <>
            <Typography variant="body" color="info-medium">
              Upload Successful!
            </Typography>
            <Typography variant="bodyXs" color="medium">
              This image will be
            </Typography>
            <Typography variant="bodyXs" color="medium">
              posted with the menu item
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="body" color="info-medium">
              Change your photo
            </Typography>
            <Typography variant="bodyXs" color="medium">
              This is optional but
            </Typography>
            <Typography variant="bodyXs" color="medium">
              would help attract customers
            </Typography>
          </>
        )}
      </View>
    </View>
  );
};

export default MenuImagePicker;
