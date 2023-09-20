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
    </>
  )
}

export default DetailsDesc