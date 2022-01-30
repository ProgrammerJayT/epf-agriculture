import React, {useState} from 'react';
import {Image, SafeAreaView, Appearance, StyleSheet, Text, View} from 'react-native';

const SummerPlantItem = ({item}) => {
    const [theme, setTheme] = useState(Appearance.getColorScheme);
  
    Appearance.addChangeListener(scheme => {
      setTheme(scheme.colorScheme);
    });
    
  return (
    <SafeAreaView style={theme =='light'? styles.body : darkMode.body}>
      <View style = {{backgroundColor: '#09cf02', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={[styles.image]} source={item.image} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SummerPlantItem;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
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
    borderRadius: 20,
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
    height: 150,
    width: 100,
    borderRadius: 20,
  },
});
