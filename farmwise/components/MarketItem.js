import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Appearance,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

const MarketItem = ({item}) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <SafeAreaView style={theme == 'light' ? styles.body : darkMode.body}>
      <Text style={styles.price}>{item.price}</Text>
      <Image style={[styles.image]} source={item.image} />
      <Text style={theme == 'light' ? styles.text : darkMode.text}>
        {item.title}
      </Text>

      <StatusBar backgroundColor={theme == 'light' ? '#00aeff' : '#3a3a3a'} />
    </SafeAreaView>
  );
};

export default MarketItem;

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
    height: 150,
    width: 150,
    overflow: 'hidden',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  price: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
});

const darkMode = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3a3a3a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },

  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

  image: {
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderTopRightRadius: 100,
  },
});
