import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../theme";
// import TrendingMovies from "../components/TrendingMovies";
import Carousel from "react-native-reanimated-carousel";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  return (
    <SafeAreaView>
      <Carousel
        data={trending}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1} // Index of items in array
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={400}
        sliderStyle={{ display: "flex", alignItems: "center" }}
        width={20}
      />
      {/* Trending movies etc. list
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        <View style={{ marginBottom: 8 }}>
          <Text
            style={{
              fontSize: 20, // text-xl
              marginHorizontal: 4,
              marginBottom: 5,
            }}>
            trendingMovies
          </Text>
          <Carousel
            // data={trending}
            // renderItem={({ item }) => <MovieCard item={item} />}
            // firstItem={1} // Index of items in array
            // inactiveSlideOpacity={0.6}
            // sliderWidth={600}
            // itemWidth={400}
            // sliderStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;

const MovieCard = ({ item }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={{ color: "white" }}>MovieCard</Text>
    </TouchableWithoutFeedback>
  );
};

