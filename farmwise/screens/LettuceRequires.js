import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LettuceRequires = () => {
  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={{marginHorizontal: 20, width: '100%'}}>
          <Text style={{fontSize: 55, fontWeight: 'bold', color: 'green'}}>
            Lettuce
          </Text>
          <View
            style={{
              width: '50%',
              height: 1,
              backgroundColor: '#3a3a3a',
            }}></View>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 15}}>
            Classification
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginHorizontal: 25,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Scientific name: Lactuta sativa L.{'\n'}Common names: Lettuce,
            Tshilai
            {'\n'}Family: Astaraceae/Compositae
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 15}}>
            Origin and distribution
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginHorizontal: 25,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Lettuce probably originated from Asia, where it was grown for
            centuries and its early forms were used in Egypt around 4500 BC. The
            Romans grew types of lettuce resembling the present romaine
            cultivars as early as the beginning of the Christian era. The crop
            was also used in China by the 7th century A.D. Lettuce is now one of
            the world’s most important salad crops and is grown worldwide
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 15}}>
            Climatic requirements
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginHorizontal: 25,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Temperature{'\n'}
            {'\n'}
            Lettuce is a cool season crop that grows best within a temperature
            range of 12 °C to 20 °C. It does not suffer from light frosts and
            winter cold except near maturity. Severe frost before harvest can
            scorch leaves and heads. Temperatures above 27 °C affect head
            development and plant edible quality and also promote premature seed
            stalk development. High temperatures also inhibit germination and
            can cause a high incidence of tipburn.{'\n'}
            {'\n'}
            {'\n'}
            {'\n'}Soil requirements{'\n'}
            {'\n'}
            The plant grows well on a wide variety of soils ranging from light
            sand to heavy clay, whoever, best results are obtained on fertile
            loams that are rich in organic matter. A pH between 5,5 and 7 is
            optimum. Lettuce should be grown on soils with a high water-holding
            capacity and proper drainage for good root growth and plant
            performance
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 15}}>
            Planting
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginHorizontal: 25,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Raised beds are ideal for lettuce production and they help prevent
            damage from soil compaction and soil compaction and flooding The
            also improve air. They also improve air flow around the plants,
            resulting in reduced disease incidence. Plant populations range from
            60 000 to 100 000 per hectare. Lettuce is regularly sown directly in
            the field to a depth of 10 to 15 mm. The seedlings are later thinned
            out to the desired spacing and they are sometimes used for
            transplanting. Seedlings for transplanting may also be raised in
            seedtrays or seedbeds and transplanted about five weeks after sowing
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 15}}>
            Fertilisation
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginHorizontal: 25,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Fertiliser applications should be based on soil analysis.
            Overfertilisation with nitrogen may result in increased
            susceptibility of the crop to various diseases or disorders.
            Generally, a 2:3:4 (30) fertiliser mixture at a rate of 500 to 1 000
            kg/ha can be applied, depending on soil fertility. A side dressing
            of 150 to 250 kg LAN per hectare can then be applied at four weeks.
            Lettuce also responds well to organic fertilisers.
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 15}}>
            Irrigation
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              marginHorizontal: 25,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Lettuce has a shallow root system and as such requires frequent but
            lighter irrigations. The roots penetrate the soil to a depth of only
            300 mm. Water should be applied throughout the growing period and
            reduced when the heads become full. A water shortage tends to
            promote bolting.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LettuceRequires;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
