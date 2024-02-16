import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { S3 } from "aws-sdk";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import SingleImagePicker from "../../components/base/SingleImagePicker";
import { Image as ImageType } from "../../types/Image";
import Button from "../../components/base/Button";
import { ScrollView } from "react-native-gesture-handler";

const s3 = new S3({
  accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.EXPO_PUBLIC_AWS_REGION,
});

const SingleImagePickerCollection = () => {
  const [localImage, setLocalImage] = useState<ImageType | undefined>(
    undefined
  );
  const [remoteImage, setRemoteImage] = useState<string | undefined>(undefined);

  const handleUpload = async () => {
    if (
      process.env.EXPO_PUBLIC_AWS_BUCKET_NAME &&
      localImage &&
      localImage.uri
    ) {
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
          setRemoteImage(result.Location);
        }
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
      <View style={{ marginBottom: 32, alignItems: "center" }}>
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
