import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Farming101 = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={{
          width: '70%',
          backgroundColor: 'green',
          height: '50%',
          marginTop: 20,
          alignItems: 'center',
          borderRadius: 20,
        }}></View>
      <View
        style={{
          width: '80%',
          backgroundColor: '#fff',
          height: '30%',
          marginTop: '-85%',
          borderRadius: 20,
        }}></View>
    </SafeAreaView>
  );
};

export default Farming101;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3a3a3a',
    alignItems: 'center',
  },
});
