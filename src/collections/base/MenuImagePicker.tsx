import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import MenuImagePicker from "../../components/base/MenuImagePicker";
import { v4 as uuidv4 } from "uuid";
import { Image as ImageType } from "../../types/Image";
import { S3Params } from "../../types/S3Params";
import { S3 } from "aws-sdk";

const MenuImagePickerCollection = () => {
  const [localImage, setLocalImage] = useState<ImageType>();
  const [remoteImage, setRemoteImage] = useState<string>();

  const s3 = new S3({
    accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.EXPO_PUBLIC_AWS_REGION,
  });

  const handleImageChange = async (image: Image | "undefined") => {
    if (!image || !image.uri) return;
    setLocalImage(image);

    try {
      const uuid = uuidv4();
      const response = await fetch(image.uri);
      const blob = await response.blob();
      const contentType = response.headers.get("Content-Type");

      if (!contentType) return;

      const params: S3Params = {
        Bucket: process.env.EXPO_PUBLIC_AWS_BUCKET_NAME || "",
        Key: `uploads/${uuid}`,
        Body: blob,
        ContentType: contentType,
      };
      const result = await s3.upload(params).promise();
      if (result.Location) {
        setRemoteImage(result.Location);
        console.log(result.Location);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <ScrollView>
      <View>
        <View>
          <MenuImagePicker image={localImage} setImage={handleImageChange} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MenuImagePickerCollection;

const styles = StyleSheet.create({});
