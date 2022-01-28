import {
  Appearance,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Landing = ({navigation}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <SafeAreaView style={theme == 'light' ? lightMode.body : darkMode.body}>
      <View style={darkMode.head_flex}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <FontAwesome
            name="align-justify"
            size={30}
            color={theme == 'light' ? '#000' : '#fff'}
          />
        </TouchableOpacity>

        <Text style={darkMode.farm_wise}>Farm Wise</Text>

        <TouchableOpacity>
          <Image
            style={darkMode.profile_image}
            source={require('../res/images/WhatsApp_Image_2022-01-24_at_12.51.48_AM-removebg-preview.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}></View>
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
