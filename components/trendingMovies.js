import { View, Text } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const trendingMovies = () => {
  return (
    <View className="mb-8"> // With margin bottom of 8
      <Text className="text-white text-xl mx-4 mb-5">trendingMovies</Text>
      <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={1} // Index of items in array
        inactiveSlideOpacity={0.60}
        sliderWidth={600}
        itemWidth={400}
        sliderStyle={{display: 'flex', alignItems: 'center'}}
      /> 
    </View>
  )
}

export default trendingMovies

const MovieCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <Text>MOVIE CARD</Text>
    </TouchableWithoutFeedback>
  )
}
