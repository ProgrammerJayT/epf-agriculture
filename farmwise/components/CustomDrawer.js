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
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  return (
    <SafeAreaView style={styles.body}>
      <DrawerContentScrollView {...props}>
        <LottieView
          style={{width: 150, height: 250, alignSelf: 'center'}}
          source={require('../data/JSON_animation/72315-watering-plants.json')}
          autoPlay
          loop
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.divider}></View>
      <View>
      
      <TouchableOpacity style={styles.sign_out_btn} onPress={()=>{props.navigation.navigate('ShareApp')}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="share-social-outline" size={25} color="#fff" />
          <Text style={styles.sign_out_text}>Tell your friends about this app</Text>
        </View>
      </TouchableOpacity>


        <TouchableOpacity style={styles.sign_out_btn}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons name="cloud-download-outline" size={25} color="#fff" />
            <Text style={styles.sign_out_text}>Ever heard of Mzolo app? Get it now!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sign_out_btn}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome name="sign-out" size={25} color="#fff" />
            <Text style={styles.sign_out_text}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor={'#872b00'} />
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#872b00',
  },

  sign_out_btn: {
    width: '100%',
    marginRight: 5,
    borderTopRightRadius: 10,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  sign_out_text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },

  container: {
    backgroundColor: 'green',
  },

  image_bg: {
    height: '100%',
  },

  divider: {
    height: 1,
    width: '90%',
    backgroundColor: '#a3a3a3',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
