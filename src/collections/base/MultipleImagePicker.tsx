import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MultipleImagePicker from "../../components/base/MultipleImagePicker";
import { Image as ImageType } from "../../types";
import Button from "../../components/base/Button";
import FormData from "form-data";
import axios from "axios";

const MultipleImagePickerCollection = () => {
  const [localImages, setLocalImages] = useState<ImageType[]>([]);
  const [remoteImages, setRemoteImages] = useState<string[]>([]);

  const handleUpload = async () => {
    const formData = new FormData();
    localImages.forEach((localImage) => {
      formData.append("image", {
        uri: localImage.uri,
        name: localImage.fileName,
        type: localImage.type,
      });
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
    setRemoteImages(data.map((dataItem) => dataItem.Key));
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16 }}
    >
      <View>
        <Text>Local Images</Text>
        <MultipleImagePicker images={localImages} setImages={setLocalImages} />
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
        <Text>Remote Images</Text>
        <View style={styles.list}>
          {remoteImages.map((remoteImage, itemIndex) => (
            <View style={styles.item} key={itemIndex}>
              <Image source={{ uri: remoteImage }} style={styles.image} />
            </View>
          ))}
        </View>
        <View>
          {remoteImages.map((remoteImage, itemIndex) => (
            <Text key={itemIndex}>{remoteImage}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MultipleImagePickerCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageContainer: {
    paddingHorizontal: 64,
  },
  item: {
    width: "25%",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 8,
  },
});
