import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { S3 } from "aws-sdk";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import SingleImagePicker from "../../components/base/SingleImagePicker";
import { Image as ImageType } from "../../types/Image";
import Button from "../../components/base/Button";
import { ScrollView } from "react-native-gesture-handler";
import { GetUser, ChangeImage } from "../../services/react-query/queries/user";

const s3 = new S3({
  accessKeyId: process.env.EXPO_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.EXPO_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.EXPO_PUBLIC_AWS_REGION,
});

const ChangeImageCollection = () => {
  const { data: user, refetch: refetchUser } = GetUser();
  const { mutate: mutateImage } = ChangeImage();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<ImageType | undefined>(undefined);

  const handleUpload = async () => {
    if (process.env.EXPO_PUBLIC_AWS_BUCKET_NAME && image && image.uri) {
      const uuid = uuidv4();
      const blob = await (await fetch(image.uri)).blob();

      const params = {
        Bucket: process.env.EXPO_PUBLIC_AWS_BUCKET_NAME,
        Key: `uploads/${uuid}-${image.fileName}`,
        Body: blob,
        ContentType: "image/jpeg",
        _key: `uploads/${uuid}-${image.fileName}`,
      };

      const response = await s3.upload(params).promise();

      mutateImage({ image: response.Location });

      refetchUser();
    }
  };

  useEffect(() => {
    const main = async () => {
      setIsLoading(true);
      if (user?.image) {
        const response = await fetch(user.image);

        setImage({
          uri: user.image,
          fileName: user.image
            .substring(user.image.lastIndexOf("/") + 1)
            .substring(37),
          type: response.headers.get("Content-Type"),
        });
      }
      setIsLoading(false);
    };
    main();
  }, [user, user?.image]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16 }}
    >
      <View style={styles.imageContainer}>
        {!isLoading && <SingleImagePicker image={image} setImage={setImage} />}
      </View>
      <View style={{ marginBottom: 32, alignItems: "center" }}>
        <Button
          text="Change"
          variant="primary"
          buttonSize="md"
          onPress={handleUpload}
        />
      </View>
    </ScrollView>
  );
};

export default ChangeImageCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    paddingHorizontal: 64,
  },
});
