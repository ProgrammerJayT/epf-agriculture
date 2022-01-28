import {ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = props => {
  return (
    <SafeAreaView style = { styles.body }>
      <DrawerContentScrollView {...props} contentContainerStyle = {styles.container}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
      <TouchableOpacity style = {styles.sign_out_btn}>
          <Text style = {styles.sign_out_text}>Sign Out</Text>
      </TouchableOpacity>
      </View>

      <StatusBar backgroundColor={'#00aeff'}/>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    },

    sign_out_btn: {
        backgroundColor: '#00aeff',
        width: '100%',
        alignSelf: 'center',
        marginRight: 5,
        borderTopRightRadius: 10,
        marginLeft: 5,
    },

    sign_out_text: {
        padding: 10,
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    },

    container: {
        backgroundColor: '#00aeff',
    },

    image_bg: {
        height: '100%'
    }
});
