import React, { useState, useEffect } from "react";
import "react-native-get-random-values";
import { ScrollView, View } from "react-native";
import AdImagePicker from "../../components/base/AdImagePicker";
import { Image } from "../../types/Image";
import Typography from "../../components/base/Typography";
import { v4 as uuidv4 } from "uuid";
import { Image as ImageType } from "../../types/Image";
import { S3Params } from "../../types/S3Params";
import {UploadImage} from "../../services/react-query/queries/s3"

const AdImagePickerCollection = () => {
  const [localImages, setLocalImages] = useState<ImageType>();
  const [remoteImages, setRemoteImages] = useState<string>();

  
  const {
    mutate: uploadImageMutate,
    data: uploadImageData,
    isPending,
  } = UploadImage();

  const handleImageChange = async (image: Image | undefined) => {
    if (!image || !image.uri) return;
    setLocalImages(image);

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
      uploadImageMutate(params)
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    if (uploadImageData) {
      setRemoteImages(uploadImageData);
      console.log(uploadImageData);
    }
  }, [uploadImageData]);

  return (
    <ScrollView>
      <View>
        <View>
          <AdImagePicker image={localImages} setImage={handleImageChange} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AdImagePickerCollection;
