import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';

const Wallet = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        contentContainerStyle={{
          width: Dimensions.get('window').width,
          alignItems: 'center',
        }}>
        <View style={{width: '100%'}}>
          <Text style={styles.balance}>Balance: R73 100.67</Text>
        </View>
        <Text style={{fontSize: 30}}>Top-up wallet</Text>

        <View style={{width: '100%', marginTop: 50, marginLeft: 20}}>
          <Text style={{fontSize: 20, marginBottom: 10}}>Bank Card</Text>
        </View>
        <LottieView
          style={{width: 150, height: 150, alignSelf: 'center'}}
          source={require('../data/JSON_animation/34625-wallet-card-animation.json')}
          autoPlay
          loop
        />

        <View style={{width: '100%', marginTop: 50, marginLeft: 20}}>
          <Text style={{fontSize: 20, marginBottom: 10}}>MTN Momo</Text>
        </View>
        <Image
          style={{width: 150, height: 150}}
          source={require('../res/images/momo.png')}
        />

        <View style={{width: '100%', marginTop: 50, marginLeft: 20}}>
          <Text style={{fontSize: 20, marginBottom: 10}}>Scan to receive funds</Text>
        </View>
      <QRCode
        value="Farm Wise"
      />

      <TouchableOpacity style = {{marginTop: 50, backgroundColor: '#000', marginBottom: 20, borderRadius: 20, width: 250}}>
        <Text style = {{padding: 20, color: '#fff', textAlign: 'center', fontSize: 15}}>Previous Transactions</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  balance: {
    backgroundColor: 'brown',
    color: '#fff',
    fontSize: 30,
    paddingVertical: 10,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    textAlign: 'center',
    marginBottom: 25,
  },

  recharge: {
    width: '100%',
    height: '20%',
  },
});
