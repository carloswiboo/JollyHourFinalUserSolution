import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Divider} from 'react-native-elements';

export default function ProfileComponent() {
  return (
    <SafeAreaView style={{width: '100%', flex: 1, backgroundColor: 'black'}}>
      <View>
        <Text style={styles.titulo}>Mi Perfil</Text>
      </View>
      <Divider style={{backgroundColor: 'rgba(255,255,255,.4)'}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
