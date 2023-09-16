import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Carousel from 'react'

var {width, height} = Dimensions.get('window');

const SlideTest = ({data}) => {
    return (
        <View className="mb-8">
            <Text className="text-black text-xl mx-4 mb-5">Hot</Text>
            <Carousel
                data = {data}
                renderItem={({item})=> <ItemCard item={item} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={600}
                itemWidth={400}
                slideStyle={{display: 'flex',alignItems: 'center'}}
                />
        </View>
    )
}

export default SlideTest;

const ItemCard = ({item})=>{
    return (
        
         <Image
             source={require('../assets/images/person01.png')}
             style={{
                width: width*0.6,
                height: height*0.4
            }}
        />
        
    )
}

