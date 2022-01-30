import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import MyProfile from '../screens/MyProfile';
import About from '../screens/About';
import ShareApp from '../screens/ShareApp';
import LettuceRequires from '../screens/LettuceRequires';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Drawer"
          component={DrawerStack}
        />
        <Stack.Screen
          name="ShareApp"
          component={ShareApp}
        />
        <Stack.Screen
          name="Lettuce"
          component={LettuceRequires}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
