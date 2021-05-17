import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
export default function HeaderInicioComponent({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.tinyLogo}
          source={require('../images/flechaAtras.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.tinyLogo}
        source={require('../images/jollylogoapp.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  tinyLogo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});
