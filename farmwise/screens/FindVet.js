import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FindVet = () => {
  return (
    <View style = {styles.body}>
      <Text>Veterinarian</Text>
    </View>
  );
};

export default FindVet;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
