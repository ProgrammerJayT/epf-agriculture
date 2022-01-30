import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Farming101 = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView></ScrollView>

      <View style={styles.primary}>
        <View style={{flex: 1}}></View>
        <TouchableOpacity style={styles.more_button}>
          <Text style={styles.scientific_name}>more info</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondary}>
        <Image
          style={styles.image}
          source={require('../res/images/lettuce.jpg')}></Image>
        <Text style={styles.item_name}>Lettuce</Text>
      </View>
    </SafeAreaView>
  );
};

export default Farming101;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    borderRadius: 100,
    marginTop: 20,
  },
  primary: {
    width: '70%',
    backgroundColor: '#38c700',
    height: '40%',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  secondary: {
    width: '80%',
    backgroundColor: '#fff',
    height: '25%',
    marginTop: '-80%',
    borderRadius: 20,
    alignItems: 'center',
  },
  item_name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scientific_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  more_button: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: 200,
    marginBottom: 20,
    alignItems: 'center',
  },
});
