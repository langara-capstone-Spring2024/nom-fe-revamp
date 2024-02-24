import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AdImagePicker from "../../components/base/AdImagePicker";
import { Image as ImageType } from "../../types/Image";
import Button from "../../components/base/Button";
import FormData from "form-data";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { AddImage } from "../../services/react-query/queries/user";

const AdImagePickerCollection = () => {
  const [localImage, setLocalImage] = useState<ImageType | undefined>(
    undefined
  );
  const [remoteImage, setRemoteImage] = useState<string | undefined>(undefined);

  const { mutate: addImageMutate, data: addImageData, isPending } = AddImage();

  const handleUpload = async () => {
    if (
      localImage &&
      localImage.uri &&
      localImage.fileName &&
      localImage.type
    ) {
      const formData = new FormData();
      formData.append("image", {
        uri: localImage.uri,
        name: localImage.fileName,
        type: localImage.type,
      });

      addImageMutate(formData);
    }
  };

  useEffect(() => {
    if (addImageData && addImageData.results) {
      const data = addImageData.results as { Key: string }[];
      if (0 < data.length) {
        setRemoteImage(data[0].Key);
      }
    }
  }, [addImageData]);

  return (
    <ScrollView>
      <View>
        <View>
          <AdImagePicker image={localImage} setImage={setLocalImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AdImagePickerCollection;
