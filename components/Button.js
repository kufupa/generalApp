import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
// TouchableOpacity is a button kinda - area that we can click

import {COLORS, SIZES, SHADOWS, FONTS} from '../constants'

export const CircleButton = ({imgURL, handlePress, ...props}) => {
  return (
     <TouchableOpacity
      style={{
        width:40,
        height:40,
        backgroundColor: COLORS.white,
        position: 'absolute', // make sure it doesnt leave our area
        borderRadius: SIZES.extraLarge, // Turns rect to a circle
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props // The other attributes like top and right
      }}
      onPress={handlePress}
      >

      <Image 
        source={imgURL}
        resizeMode='contain'
        style={{width:24, height:24}}
      />

     </TouchableOpacity>
  )
}

export const RectButton = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}
