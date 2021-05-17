import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CardsWallet from 'react-native-wallet-cards';
import {Divider} from 'react-native-elements';
export default function MyJollyComponent({navigation}) {
  const tarjetasEjemplo = [
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 1</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 2</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 3</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 4</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 5</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 6</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 7</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 8</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 9</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 10</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 11</Text>
    </View>,
    <View style={styles.tarjetasEjemplo}>
      <Text style={{color: 'black'}}>Content Card 12</Text>
    </View>,
  ];

  return (
    <SafeAreaView style={{width: '100%', flex: 1, backgroundColor: 'black'}}>
      <View>
        <Text style={styles.titulo}>Mis Jolly's</Text>
        <Text style={styles.subtitulo}>
          Texto para poner de descripción de los Jollys
        </Text>
      </View>
      <Divider style={{backgroundColor: 'rgba(255,255,255,.4)'}} />
      <CardsWallet cardEasing={'ease-out-quart'} data={tarjetasEjemplo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  subtitulo: {
    color: 'white',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  tarjetasEjemplo: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
