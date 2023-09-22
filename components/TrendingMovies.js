import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";

var { width, height } = Dimensions.get("window");
const TrendingMovies = ({ data }) => {
  const [snapIndex, setSnapIndex] = useState(0);

  return (
    <View
      style={{
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
        backgroundColor: "#000000",
      }}>
      <Text
        style={{
          color: "white",
          fontSize: 20, // text-xl
          marginHorizontal: 4,
          marginBottom: 5,
        }}>
        Trending Movies:
      </Text>

      <Carousel
        loop
        style={{
          width: width * 1,
          height: height * 0.6,
          justifyContent: "center",
        }}
        width={width * 0.8}
        height={height * 0.6}
        autoPlay={true}
        data={data}
        mode="parallax"
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        scrollAnimationDuration={1000}
        // onSnapToItem={}
        renderItem={({ index }) => <MovieCard />}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({ focus }) => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TouchableWithoutFeedback>
        <Image
          source={require("../assets/images/LegoNinjagoMoviePoster2.png")}
          style={
            !focus
              ? {
                  width: "80%",
                  height: "80%",
                  borderRadius: 20, // Turns rect to a circle
                }
              : {
                  width: "60%",
                  height: "60%",
                  borderRadius: 20, // Turns rect to a circle
                }
          }
        />
      </TouchableWithoutFeedback>
      <Text style={{ color: "white" }}>{focus}</Text>
    </View>
  );
};
