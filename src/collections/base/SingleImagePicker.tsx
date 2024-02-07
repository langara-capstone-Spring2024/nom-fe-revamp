import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SingleImagePicker from "../../components/base/SingleImagePicker";
import { Image as ImageType } from "../../types/Image";
import Button from "../../components/base/Button";
import FormData from "form-data";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const SingleImagePickerCollection = () => {
  const [localImage, setLocalImage] = useState<ImageType | undefined>(
    undefined
  );
  const [remoteImage, setRemoteImage] = useState<string | undefined>(undefined);

  const handleUpload = async () => {
    if (localImage) {
      const formData = new FormData();
      formData.append("image", {
        uri: localImage.uri,
        name: localImage.fileName,
        type: localImage.type,
      });

      const response = await axios.post(
        "http://localhost:8000/api/upload-multi",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data.results as { Key: string }[];
      if (0 < data.length) {
        setRemoteImage(data[0].Key);
      }
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16 }}
    >
      <View>
        <Text>Local Image</Text>
        <View style={styles.imageContainer}>
          <SingleImagePicker image={localImage} setImage={setLocalImage} />
        </View>
      </View>
      <View style={{ marginBottom: 32 }}>
        <Button
          text="Upload"
          variant="primary"
          buttonSize="md"
          onPress={handleUpload}
        />
      </View>
      <View>
        <Text>Remote Image</Text>
        <View style={styles.imageContainer}>
          <View style={styles.item}>
            <Image source={{ uri: remoteImage }} style={styles.image} />
          </View>
        </View>
        <View>
          <Text>{remoteImage}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleImagePickerCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    paddingHorizontal: 64,
  },
  item: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10000,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 10000,
  },
});
