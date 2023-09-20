import { Text, View, SafeAreaView, FlatList, ScrollView, Button } from 'react-native'
import { useState } from 'react';

// Flatlist = lazy loading when on / off screen so pretty gamer

import {COLORS, NFTData} from "../../constants";
import {NFTCard, HomeHeader, FocusedStatusBar, Background} from "../../components/index.js";
import Profile from '../../components/Profile';

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState([1,2,3])
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style = {{flex: 1}}>
        {/* Div containing nft list */}
        <View style = {{zIndex: 0}}>
          <Background>
          <FlatList 
            data = {NFTData}
            renderItem={({item}) => <NFTCard data={item} />}
            // keyExtractor prop is used to keep track of the list items. This is helpful when you are adding or removing items dynamically to the list
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // HomeHeader component rendered on top of list
            ListHeaderComponent={<HomeHeader />}
          />
          </Background>
        </View>
        
        {/* The black / white top bottom background */}

        <View style = {{
          position: "absolute",
          top: 0,
          bottom:0,
          right:0,
          left:0,
          zIndex: -1 // Appear behind NFTS
        }}>
          <View style = {{height: 300, backgroundColor: COLORS.primary}}/>
          <View style = {{flex: 1, backgroundColor: COLORS.white}}/>
        </View>
        
      </View>
      <Button
      title="Your Profile"
      onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  )
}

export default Home;