import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native"

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from "../components"

// Since using details in stack.screen in App.js, we get route and navigation by default
const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView>
      <FocusedStatusBar 
        barStyle="dark-content" // Color of text n wifi n stuff
        backgroundColor="transparent"
        translucent={true}
      />

      <View></View>

    </SafeAreaView>
    )
}

export default Details