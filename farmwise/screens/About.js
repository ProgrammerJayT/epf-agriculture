import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <SafeAreaView style = {styles.body}>
      <Text>About Farm Wise</Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
