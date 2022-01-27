import {Appearance, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState, useEffect} from 'react';

const Landing = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);

  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  return (
    <SafeAreaView
      style={theme == 'light' ? lightMode.body : darkMode.body}></SafeAreaView>
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
});
