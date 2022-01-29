import {StyleSheet, Text, Switch, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Map from './Map';
import LottieView from 'lottie-react-native';

const FindVet = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [view, setView] = useState('List');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    if (isEnabled) {
      setView('List');
    } else {
      setView('Map');
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.map_container}>
        <Map />
      </View>
      <View style={styles.below_map}>
        <View style={styles.switch}>
          <TouchableOpacity style={styles.switch_button}>
            <Text style={styles.switch_text}>Switch view mode to {view}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FindVet;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },

  above_map: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  below_map: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  switch: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  switch_text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  map_container: {
    flex: 1,
  },

  switch_button: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
  },
});
