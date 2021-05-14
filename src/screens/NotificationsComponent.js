import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ItemNotificationComponent from '../components/ItemNotificationComponent';
import LinearGradient from 'react-native-linear-gradient';
export default function NotificationsComponent() {
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
    <LinearGradient
      style={styles.loginBackground}
      colors={['#3F5EFB', '#FC466B']}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}>
<Text style={styles.titleView}> Notificaciones </Text>
      </LinearGradient>
      
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
