import React, { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerComponent({ onImagesPicked }) {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImages(result.assets);
      onImagesPicked(result.assets);
    }
  };

  return (
    <View>
      <Button title="Pick images" onPress={pickImage} />
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image.uri }}
            style={{ width: 100, height: 100 }}
          />
        ))}
      </View>
    </View>
  );
}
