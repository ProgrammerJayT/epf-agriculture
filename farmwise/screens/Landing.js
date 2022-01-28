import {
  Appearance,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Landing = ({navigation}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const toMyProfile = () => {
    navigation.navigate('MyProfile');
  };

  const toAbout = () => {
    navigation.navigate('About');
  };

  return (
    <SafeAreaView style={theme == 'light' ? lightMode.body : darkMode.body}>
      <View style={darkMode.head_flex}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <FontAwesome
            name="align-justify"
            size={25}
            color={theme == 'light' ? '#000' : '#fff'}
          />
        </TouchableOpacity>

        <Text onPress={toAbout} style={darkMode.farm_wise}>
          Farm Wise
        </Text>

        <TouchableOpacity onPress={toMyProfile}>
          <Image
            style={darkMode.profile_image}
            source={require('../res/images/WhatsApp_Image_2022-01-24_at_12.51.48_AM-removebg-preview.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={lightMode.text_input_container}>
        <FontAwesome name="search" size={20} color={'#3a3a3a'} />
        <TextInput placeholder='Search here e.g Cattle, Banana, Broiler, Manure, Market' style={lightMode.search_input} />
      </View>
      <ScrollView style={{flex: 1, backgroundColor: '#3a3', width: '100%', marginTop: 20}}>
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;

const lightMode = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input_container: {
    borderWidth: 0.5,
    borderColor: '#3a3a3a',
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  search_input: {
    width: '98%',
  },
});

const darkMode = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  head_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    alignItems: 'center',
  },

  profile_image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#000',
  },

  farm_wise: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
