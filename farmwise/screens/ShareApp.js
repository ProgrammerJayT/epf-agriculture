import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const ShareApp = () => {

    const saveCode = () => {
        
    }

  return (
    <SafeAreaView style={styles.body}>
      <QRCode style = {styles.qr_code} value="http://awesome.link.qr" />
    </SafeAreaView>
  );
};

export default ShareApp;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  qr_code: {
  },
});
