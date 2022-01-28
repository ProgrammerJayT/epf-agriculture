import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.body}>
      <Image
        style={styles.profile_image}
        source={require('../res/images/WhatsApp_Image_2022-01-24_at_12.51.48_AM-removebg-preview.png')}
      />
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile_image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#000',
  }
});
