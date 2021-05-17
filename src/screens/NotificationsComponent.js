import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import ItemNotificationComponent from '../components/ItemNotificationComponent';
import LinearGradient from 'react-native-linear-gradient';
import HeaderInicioComponent from '../templates/HeaderInicioComponent';

import {Divider} from 'react-native-elements';
export default function NotificationsComponent({navigation}) {
  const list = [
    {
      id: 1,
      text: 'Nombre de la notificación',
      fecha: 'Hace 20 Min',
      isJolly: true,
    },
    {
      id: 2,
      text: 'Nombre de la notificación',
      fecha: 'Hace 25 Min',
      isJolly: true,
    },
    {
      id: 3,
      text: 'Nombre de la notificación',
      fecha: 'Hace 30 Min',
      isJolly: true,
    },
    {
      id: 4,
      text: 'Nombre de la notificación',
      fecha: 'Hace 60 Min',
      isJolly: true,
    },
    {
      id: 5,
      text: 'Nombre de la notificación',
      fecha: 'Hace 2 Hrs',
      isJolly: true,
    },
    {
      id: 6,
      text: 'Nombre de la notificación',
      fecha: 'Hace 3 Hrs',
      isJolly: true,
    },
    {
      id: 7,
      text: 'Nombre de la notificación',
      fecha: 'Hace 2 Días',
      isJolly: false,
    },
    {
      id: 8,
      text: 'Nombre de la notificación',
      fecha: 'Hace 2 Días',
      isJolly: false,
    },
    {
      id: 9,
      text: 'Nombre de la notificación',
      fecha: 'Hace 2 Días',
      isJolly: true,
    },
    {
      id: 10,
      text: 'Nombre de la notificación',
      fecha: 'Hace 2 Días',
      isJolly: false,
    },
    {
      id: 10,
      text: 'Nombre de la notificación',
      fecha: 'Hace 3 Días',
      isJolly: false,
    },
  ];

  return (
    <>
      <SafeAreaView style={{width: '100%', flex: 1, backgroundColor: 'black'}}>
        <View>
          <Text style={styles.titulo}>Mis Jolly's</Text>
          <Text style={styles.subtitulo}>
            Texto para poner de descripción de los Jollys
          </Text>
        </View>
        <Divider style={{backgroundColor: 'rgba(255,255,255,.4)'}} />
        <ScrollView style={styles.root}>
          <ItemNotificationComponent notificationsList={list} />
        </ScrollView>
      </SafeAreaView>
      <ScrollView style={styles.root}>
        <ItemNotificationComponent notificationsList={list} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
  },
  titleView: {
    color: 'white',
    fontSize: 30,
    paddingVertical: 10,
    textAlign: 'center',
  },
});
