import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

// Screens
import Home from './screens/Home';
import Details from './screens/Details';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen Names
const homeName = 'Home';
const detailsName = 'Details';
const profileName = 'Profile';
const settingsScreen = 'Settings';

const Tab = createBottomTabNavigator();


const MainContainer = () => {
    return (
      <NavigationContainer theme={theme}>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn == homeName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (rn == detailsName) {
                    iconName = focused ? 'list' : 'list-outline'
                } else if (rn == settingsScreen) {
                    iconName = focused ? 'settings' : 'settings-outline'
                }

                return <Icon name={iconName} size={size} color={color}/>
            },
        })}>
            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={detailsName} component={Details}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>
            <Tab.Screen name={settingsScreen} component={SettingsScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default MainContainer;