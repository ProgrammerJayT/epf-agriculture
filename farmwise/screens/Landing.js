import {
  Appearance,
  FlatList,
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
import SummerPlantsPreview from '../data/flat_list/SummerPlantsPreview';
import SummerPlantItem from '../components/SummerPlantItem';
import TopFarmerItem from '../components/TopFarmerItem';
import TopFarmersData from '../data/flat_list/TopFarmersData';
import LottieView from 'lottie-react-native';

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
        <TextInput
          placeholder="Search here e.g Cattle, Banana, Broiler, Manure, Market"
          style={lightMode.search_input}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          marginTop: 20,
        }}>
        <LottieView
          style={{width: 100, height: 100, alignSelf: 'center'}}
          source={require('../data/JSON_animation/55578-agricultural-icon-animation.json')}
          autoPlay
          loop
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text style={darkMode.flat_list_heads}>
              What to plant this January
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'skyblue',
                  fontWeight: 'bold',
                  paddingHorizontal: 20,
                }}>
                see more
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={SummerPlantsPreview}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            bouncesZoom={true}
            zoomScale={2}
            maximumZoomScale={10}
            minimumZoomScale={2}
            bounces={false}
            renderItem={({item}) => <SummerPlantItem item={item} />}
          />
        </View>

        <LottieView
          style={{width: 100, height: 100, alignSelf: 'center', marginTop: 20}}
          source={require('../data/JSON_animation/89982-tractor.json')}
          autoPlay
          loop
        />
        <View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Text style={darkMode.flat_list_heads}>
              Our top range of farmers
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'skyblue',
                  fontWeight: 'bold',
                  paddingHorizontal: 20,
                }}>
                see more
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={TopFarmersData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            bouncesZoom={true}
            zoomScale={2}
            maximumZoomScale={10}
            minimumZoomScale={2}
            bounces={false}
            renderItem={({item}) => <TopFarmerItem item={item} />}
          />
        </View>

        <LottieView
          style={{width: 150, height: 150, alignSelf: 'center', marginTop: 20}}
          source={require('../data/JSON_animation/21306-delivery-agriculture-style.json')}
          autoPlay
          loop
        />
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
    width: 60,
    height: 60,
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

  flat_list_heads: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
