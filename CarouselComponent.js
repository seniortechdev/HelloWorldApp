import React from "react";
import { View, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

export default function CarouselComponent({ images }) {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={{ uri: item.uri }}
          style={{ width: screenWidth, height: 200 }}
        />
      </View>
    );
  };

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
    />
  );
}
