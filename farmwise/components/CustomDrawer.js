import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomDrawer = props => {
  return (
    <SafeAreaView style={styles.body}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.container}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.divider}></View>
      <View>
        <TouchableOpacity style={styles.sign_out_btn}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <FontAwesome name="sign-out" size={30} color="#000" />
            <Text style={styles.sign_out_text}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor={'#00aeff'} />
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
    width: '100%',
    alignSelf: 'center',
    marginRight: 5,
    borderTopRightRadius: 10,
    marginLeft: 5,
  },

  sign_out_text: {
    padding: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: '#00aeff',
  },

  image_bg: {
    height: '100%',
  },

  divider: {
    height: 1,
    width: '80%',
    backgroundColor: '#a3a3a3',
    alignSelf: 'center',
  },
});
