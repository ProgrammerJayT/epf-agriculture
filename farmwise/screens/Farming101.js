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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Farming101 = ({navigation}) => {

  const gotoLettuce = () => {
    navigation.navigate('Lettuce');
  }

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView contentContainerStyle={styles.scroller} showsVerticalScrollIndicator = {false} >
      <View></View>
          <View style={styles.primary}>
            <View style={{flex: 1}}></View>
            <TouchableOpacity style={styles.more_button} onPress={gotoLettuce}>
              <Text style={styles.scientific_name}>more info</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondary}>
            <Text style={styles.item_name}>Lettuce</Text>
            <Image
              style={styles.image}
              source={require('../res/images/lettuce.jpg')}></Image>
          </View>


          <View style = {{marginTop: 100}}></View>
          <View style={styles.primary}>
            <View style={{flex: 1}}></View>
            <TouchableOpacity style={styles.more_button}>
              <Text style={styles.scientific_name}>more info</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondary}>
            <Text style={styles.item_name}>Cabbage</Text>
            <Image
              style={styles.image}
              source={require('../res/images/cabbage.jpg')}></Image>
          </View>
          <View style = {{marginTop: 100}}></View>
          
      <TouchableOpacity style = {{marginTop: 50, backgroundColor: '#000', marginBottom: 20, borderRadius: 20, width: 250}}>
        <Text style = {{padding: 20, color: '#fff', textAlign: 'center', fontSize: 15}}>Farming101 Forum</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Farming101;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },

  image: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 100,
    marginTop: 20,
  },
  primary: {
    width: '70%',
    backgroundColor: '#38c700',
    height: '30%',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  secondary: {
    width: '80%',
    backgroundColor: '#fff',
    height: '20%',
    marginTop: '-60%',
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
    backgroundColor: 'brown',
    borderRadius: 20,
    width: 200,
    marginBottom: 20,
    alignItems: 'center',
  },
  scroller: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
