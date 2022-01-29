import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from 'react-native-geolocation-service';
import LottieView from 'lottie-react-native';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiaGF3a3dhdGNodHJhY2tlciIsImEiOiJja3IxeTg2bDQwZjhhMnVyeGN2Z2E4Zm9hIn0.MTbTHIk6RB1t1lfhAGL-ow',
);
MapboxGL.setConnected(true);

const Map = () => {
  const [myLat, setMyLat] = useState(null);
  const [myLng, setMyLng] = useState(null);

  Geolocation.getCurrentPosition(
    position => {
      console.log(position.coords.latitude);

      setMyLat(position.coords.latitude);
      setMyLng(position.coords.longitude);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 0},
  );

  return (
    <View style={styles.body}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={17} centerCoordinate={[myLng, myLat]} />
        <MapboxGL.MarkerView id={'marker'} coordinate={[myLng, myLat]}>
          <View>
            <View style={styles.markerContainer}>
              <LottieView
                style={{width: 100, height: 100, alignSelf: 'center'}}
                source={require('../data/JSON_animation/7786-position.json')}
                autoPlay
                loop
              />
            </View>
          </View>
        </MapboxGL.MarkerView>
      </MapboxGL.MapView>
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
