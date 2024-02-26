import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AdImagePicker from "../../components/base/AdImagePicker";
import { Image } from "../../types/Image";

const AdImagePickerCollection = () => {
  const [localImage, setLocalImage] = useState<Image | undefined>(undefined);

  const handleImageChange = (image: Image | undefined) => {
    setLocalImage(image);
    // Here you can save the image details to your form data or state
    // Example:
    // form.append('image', image);
  };
  return (
    <ScrollView>
      <View>
        <View>
          <AdImagePicker image={localImage} setImage={handleImageChange} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AdImagePickerCollection;
