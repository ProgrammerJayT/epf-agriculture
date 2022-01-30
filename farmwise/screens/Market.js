import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MarketData from '../data/flat_list/MarketData';
import MarketItem from '../components/MarketItem';

const Market = ({navigation}) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.head_section}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <FontAwesome name="align-justify" size={25} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.market_head}>Farm Wise</Text>

        <TouchableOpacity>
          <FontAwesome name="shopping-cart" size={30} color={'#000'} />
          <Text
            style={{color: 'blue', fontWeight: 'bold', alignSelf: 'center'}}>
            {cartItems}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text_input_container}>
        <FontAwesome
          name="search"
          size={20}
          color={'#3a3a3a'}
        />
        <TextInput
          placeholder="Search here e.g Cattle, Banana, Broiler, Manure, Market"
          style={styles.search_input}
        />
      </View>

      <View style={{flex: 1, marginBottom: 50}}>
        <View>
          <FlatList
            data={MarketData}
            scrollEventThrottle={32}
            showsVerticalScrollIndicator = {false}
            bouncesZoom={true}
            zoomScale={2}
            maximumZoomScale={10}
            minimumZoomScale={2}
            bounces={false}
            renderItem={({item}) => <MarketItem item={item} />}
          />
        </View></View>
      <TouchableOpacity style={{marginBottom: 20,width: 200, alignItems: 'center'}}>
        <View style={styles.new_listing_container}>
          <FontAwesome name="plus" size={25} color={'#fff'} />
          <Text style={styles.new_listing_text}>Create new listing</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flat_list_heads: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },

  head_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
  },

  new_listing_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'brown',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  new_listing_text: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  market_head: {
    fontSize: 25,
    color: '#000',
  },

  search_input: {
    width: '98%',
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
});
