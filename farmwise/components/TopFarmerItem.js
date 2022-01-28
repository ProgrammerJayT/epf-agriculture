import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const TopFarmerItem = ({item}) => {
  return (
    <SafeAreaView style={styles.body}>
      <Image style={[styles.image]} source={item.image} />
      <Text style={styles.text}>{item.title}</Text>
    </SafeAreaView>
  );
};

export default TopFarmerItem;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },

  text: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },

  image: {
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderRadius: 100,
  },
});
