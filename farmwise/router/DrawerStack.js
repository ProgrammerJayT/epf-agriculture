import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Landing from '../screens/Landing';
import Settings from '../screens/Settings';
import CustomDrawer from '../components/CustomDrawer';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Explore" component={Landing} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
