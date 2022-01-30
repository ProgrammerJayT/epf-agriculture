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
import MarketData from '../data/flat_list/MarketData';
import MarketItem from '../components/MarketItem';

const Landing = ({navigation}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const toMyProfile = () => {
    navigation.navigate('Profile');
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

        <Text onPress={toAbout} style={theme == 'light'? lightMode.farm_wise : darkMode.farm_wise}>
          Farm Wise
        </Text>

        <TouchableOpacity onPress={toMyProfile}>
          <Image
            style={theme == 'light'? lightMode.profile_image : darkMode.profile_image}
            source={require('../res/images/WhatsApp_Image_2022-01-24_at_12.51.48_AM-removebg-preview.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          flex: 1,
          width: '100%',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={theme == 'light'? lightMode.flat_list_heads : darkMode.flat_list_heads}>
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
          style={{width: 80, height: 80, alignSelf: 'center'}}
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
              marginTop: 25,
            }}>
            <Text style={theme == 'light'? lightMode.flat_list_heads : darkMode.flat_list_heads}>
              Our top range of farming experts
            </Text>
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
          style={{width: 100, height: 100, alignSelf: 'center'}}
          source={require('../data/JSON_animation/21306-delivery-agriculture-style.json')}
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
              marginTop: 25,
            }}>
            <Text style={theme == 'light'? lightMode.flat_list_heads : darkMode.flat_list_heads}>
              Our top range of farming experts
            </Text>
          </View>
          <FlatList
            data={MarketData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            bouncesZoom={true}
            zoomScale={2}
            maximumZoomScale={10}
            minimumZoomScale={2}
            bounces={false}
            renderItem={({item}) => <MarketItem item={item} />}
          />
        </View>
        <LottieView
          style={{width: 80, height: 80, alignSelf: 'center'}}
          source={require('../data/JSON_animation/55578-agricultural-icon-animation.json')}
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

  profile_image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
});

const darkMode = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3a3a3a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  head_flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },

  profile_image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#fff',
  },

  farm_wise: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  flat_list_heads: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
