import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../theme";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  return (
    <SafeAreaView>
      {/* Trending movies etc. list */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        <TrendingMovies data={trending} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
