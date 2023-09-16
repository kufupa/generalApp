import React from "react";
import { View, ScrollView, TouchableHighlight, TouchableOpacity, Image, Text } from "react-native";
import { COLORS, assets } from "../constants";

const Profile = ({ data }) => {
    return (
        <View>
            <ScrollView>
                <View style={{padding: 10, width: '100%', backgroundColor: COLORS.primary, height: 150}}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/marke.png')}
                        style={{width: 30, height: 30}}/>
                    {/* lines for formatting */}
                    <View></View>
                    <View></View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../assets/images/marke.png')} style={{width: 140, height: 140, 
                    borderRadius: 100, marginTop:-70}}/>
                    <Text style={{fontFamily: 'Avenir-Next', fontSize: 25, fontWeight: 'bold', padding: 10}}>Mr. Bruh</Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: COLORS.gray}}>From the Bruh Zone</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.secondary,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20
                }}>
                    <Image source={require('../assets/images/marke.png')} style={{ width: 20, height: 20}}/>
                    <Text>CEO of Swag</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.secondary,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20
                }}>
                    <Image source={require('../assets/images/marke.png')} style={{ width: 20, height: 20}}/>
                    <Text>CEO of Swag</Text>
                </View>
                <View style={{
                    alignSelf: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: COLORS.secondary,
                    width: '90%',
                    padding: 20,
                    paddingBottom: 22,
                    borderRadius: 10,
                    shadowOpacity: 80,
                    elevation: 15,
                    marginTop: 20
                }}>
                    <Image source={require('../assets/images/marke.png')} style={{ width: 20, height: 20}}/>
                    <Text>CEO of Swag</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile;