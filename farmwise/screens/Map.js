import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

//sk.eyJ1IjoiaGF3a3dhdGNodHJhY2tlciIsImEiOiJja3l6N2tkYWgwem5nMnFxbDRxcGdiMndjIn0.t3coXlzYyNVb8IW6uLgDcA

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaGF3a3dhdGNodHJhY2tlciIsImEiOiJja3IxeTg2bDQwZjhhMnVyeGN2Z2E4Zm9hIn0.MTbTHIk6RB1t1lfhAGL-ow',
);
MapboxGL.setConnected(true);


const Map = () => {
  return (
    <View style={styles.body}>
      <MapboxGL.MapView style={styles.map} />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});
