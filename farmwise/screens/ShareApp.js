import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const ShareApp = () => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return (
    <SafeAreaView style={styles.body}>
      <QRCode
        value="Farm Wise"
        logo={{uri: base64Logo}}
        logoSize={60}
        logoBackgroundColor="transparent"
      />
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
  qr_code: {},
});
