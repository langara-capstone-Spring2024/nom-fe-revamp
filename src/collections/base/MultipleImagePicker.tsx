import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { S3 } from "aws-sdk";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import MultipleImagePicker from "../../components/base/MultipleImagePicker";
import Button from "../../components/base/Button";
import { Image as ImageType } from "../../types";

const s3 = new S3({
  accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.EXPO_PUBLIC_AWS_REGION,
});

const MultipleImagePickerCollection = () => {
  const [localImages, setLocalImages] = useState<ImageType[]>([]);
  const [remoteImages, setRemoteImages] = useState<string[]>([]);

  const handleUpload = async () => {
    localImages.forEach(async (localImage) => {
      if (process.env.EXPO_PUBLIC_AWS_BUCKET_NAME && localImage.uri) {
        const uuid = uuidv4();
        const response = await fetch(localImage.uri);
        const blob = await response.blob();
        const contentType = response.headers.get("Content-Type");

        if (contentType) {
          const params = {
            Bucket: process.env.EXPO_PUBLIC_AWS_BUCKET_NAME,
            Key: `uploads/${uuid}-${localImage.fileName}`,
            Body: blob,
            ContentType: contentType,
          };

          const result = await s3.upload(params).promise();

          if (result.Location) {
            setRemoteImages((oldValue) => [...oldValue, result.Location]);
          }
        }
      }
    });
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
      <View style={{ marginBottom: 32, alignItems: "center" }}>
        <Button
          text="Upload"
          variant="primary"
          buttonSize="md"
          onPress={handleUpload}
        />
      </View>
      <View>
        <Text>Remote Images</Text>
        <View
          style={[
            styles.list,
            { margin: 0 < remoteImages.length ? -4 : undefined },
          ]}
        >
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
    backgroundColor: "#FAFAFA",
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
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 8,
  },
});
