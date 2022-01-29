import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Landing from '../screens/Landing';
import Settings from '../screens/Settings';
import CustomDrawer from '../components/CustomDrawer';
import About from '../screens/About';
import MyProfile from '../screens/MyProfile';
import Market from '../screens/Market';
import FindVet from '../screens/FindVet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Farming101 from '../screens/Farming101';

const Drawer = createDrawerNavigator();

const DrawerStack = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -20}}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Explore"
        component={Landing}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Farming 101"
        component={Farming101}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <Fontisto name="island" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={MyProfile}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <Ionicons name="person-circle-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Market"
        component={Market}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <FontAwesome name="exchange" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Find a Vet"
        component={FindVet}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <Fontisto name="doctor" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <Ionicons
              name="information-circle-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerActiveBackgroundColor: '#000',
          drawerInactiveTintColor: '#fff',
          drawerActiveTintColor: '#fff',
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;

const styles = StyleSheet.create({});
