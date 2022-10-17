import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';

const stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#0f0c29" />
        {StackNavigator()}
      </NavigationContainer>
    );
  }
}
