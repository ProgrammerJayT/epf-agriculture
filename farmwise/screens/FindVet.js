import {StyleSheet, Text, Switch, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Map from './Map';

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
          <TouchableOpacity style = {styles.switch_button}>
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
    height: '10%',
  },

  below_map: {
    width: '100%',
    height: '10%',
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  map_container: {
    height: '90%',
  },

  switch_button: {
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 20,
  }
});
