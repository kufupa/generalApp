import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native"
import React from "react"
import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from "../components"

const DetailsHeader = () => (
  
)

// Since using details in stack.screen in App.js, we get route and navigation by default
const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content" // Color of text n wifi n stuff
        backgroundColor="transparent"
        translucent={true} // Status bar entirely blends into background
      />

      <View style={{
        width:"100%", // Moves button to middle
        position: "absolute", // Makes sure buttom will always be in position
        bottom: 0, // Moves button to bottom of SafeAreaView
        //  paddingVertical == Offset AWAY from set position
        paddingVertical: SIZES.font, // Moves upwards, AWAY from bottom
        justifyContent: "center",
        alignItems:"center", // Changes size of button from full width to middle
        backgroundColor: "rgba(255,255,255,0.5)", // 50% opacity,
        zIndex: 1
      }}>

        <RectButton 
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark }
        />
      </View>

      <FlatList 
        data={data.bids}
        renderItem = {({item}) => <DetailsBid /> }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge*3}}
        ListHeaderComponent={() => ( // React component on top of flatlist
          <React.Fragment>
            <DetailsHeader />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
    )
}

export default Details