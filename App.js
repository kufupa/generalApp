import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import Home from './navigation/screens/Home';
import Details from './navigation/screens/Details';
import ProfileScreen from './navigation/screens/ProfileScreen';
import SettingsScreen from './navigation/screens/SettingsScreen';
import MainContainer from './navigation/MainContainer';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  // Fonts not loaded for some reason
  if(!loaded) return null;


  return (
    // <NavigationContainer theme={theme}>
    //   <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
    //     <Stack.Screen name='Home' component={Home}/>
    //     <Stack.Screen name='Details' component={Details}/>
    //     <Stack.Screen name='Profile' component={ProfileScreen}/>

    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer theme={theme}>
        <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if (rn == 'Home') {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (rn == 'Details') {
                    iconName = focused ? 'list' : 'list-outline'
                } else if (rn == 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline'
                }

                return <Icon name={iconName} size={size} color={color}/>
            },
        })}
        >
            <Tab.Screen name={'Home'} component={Home}/>
            <Tab.Screen name={'Details'} component={Details}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen}/>
            <Tab.Screen name={'Settings'} component={SettingsScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    
  );
}

export default App;
