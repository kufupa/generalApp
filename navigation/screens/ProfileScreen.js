import React from 'react';
import Profile from "../../components/Profile";
import { View, Text } from "react-native-web";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                onPress={() => navigation.navigate('Home')}
            </Text>
            <Profile></Profile>
        </View>
    )
}

export default ProfileScreen;
