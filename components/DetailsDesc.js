import { View, Text } from 'react-native'
import {React, useState} from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import {COLORS, SIZES, FONTS} from '../constants'

// Title, price, description of NFT being viewed
const DetailsDesc = ({data}) => {
  return (
    <>
      <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      {/* Vertical margin for space between name and description */}
      <View style={{marginTop: SIZES.extraLarge * 1.5}}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>Description</Text>
      </View>

      <View style={{marginTop: SIZES.base}}>
      <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          lineHeight: SIZES.large
        }}>{data.description}</Text>
      </View>
      
    </>
  )
}

export default DetailsDesc