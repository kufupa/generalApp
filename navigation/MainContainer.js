import * as React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

// Screens
import Home from './screens/Home';
import Details from './screens/Details';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent"
    }
  }

const MainContainer = () => {
    return (
        <NavigationContainer theme={theme}>
        <Tab.Navigator
        initialRouteName={'Home'}
        // screenOptions={({route}) => ({
        //     tabBarIcon: ({focused, color, size}) => {
        //         let iconName;
        //         let rn = route.name;

        //         if (rn == 'Home') {
        //             iconName = focused ? 'home' : 'home-outline'
        //         } else if (rn == 'Details') {
        //             iconName = focused ? 'list' : 'list-outline'
        //         } else if (rn == 'Settings') {
        //             iconName = focused ? 'settings' : 'settings-outline'
        //         }

        //         return <Icon name={iconName} size={size} color={color}/>
        //     },
        // })}
        >
            <Tab.Screen name={'Home'} component={Home}/>
            <Tab.Screen name={'Details'} component={Details}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen}/>
            <Tab.Screen name={'Settings'} component={SettingsScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default MainContainer;