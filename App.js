import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ImagePickerComponent from "./ImagePickerComponent";
import CarouselComponent from "./CarouselComponent";

export default function App() {
  const [images, setImages] = useState([]);

  const handleImagesPicked = (pickedImages) => {
    setImages(pickedImages);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImagePickerComponent onImagesPicked={handleImagesPicked} />
      {images.length > 0 && <CarouselComponent images={images} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
