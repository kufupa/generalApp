import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const TrendingMovies = ({ data }) => {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text
        style={{
          color: "white",
          fontSize: 50, // text-xl
          marginHorizontal: 4,
          marginBottom: 5,
        }}>
        trendingMovies
      </Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1} // Index of items in array
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={400}
        sliderStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({ item }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={{ color: "white" }}>MovieCard</Text>
    </TouchableWithoutFeedback>
  );
};
