import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

var {width, height} = Dimensions.get("window");
const TrendingMovies = ({ data }) => {
  return (
    <View style={{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 8 
      }}>
      <Text
        style={{
          color: "black",
          fontSize: 20, // text-xl
          marginHorizontal: 4,
          marginBottom: 5,
        }}>
        Trending Movies: </Text>
        
      <Carousel
        loop
        style={{}}
        width={width}
        height={height/1.5}
        autoPlay={true}
        data={data}
        mode="parallax"
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        scrollAnimationDuration={1000}
        onSnapToItem={index => (index)}
        renderItem={({index}) => (
          <MovieCard data={index} />
        ) }
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({ item }) => {
  return (
    <View
      style={{
          flex: 1,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: "center"
      }}
    >
      <TouchableWithoutFeedback>
        <Image
          source={require("../assets/images/LegoNinjagoMoviePoster2.png")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20, // Turns rect to a circle
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
