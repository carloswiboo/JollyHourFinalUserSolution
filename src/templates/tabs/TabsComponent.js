import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainPageComponent from '../../screens/MainPageComponent';
import NotificationsComponent from '../../screens/NotificationsComponent';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function TabsComponent({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      inactiveColor="white"
      tabBarBadge={true}
      labeled={true}
      shifting={false}
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        labeled={true}
        name="Home"
        component={MainPageComponent}
        navigation={navigation}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={MainPageComponent}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Mis Promociones"
        component={MainPageComponent}
        options={{
          tabBarLabel: 'Mi Jolly',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={NotificationsComponent}
        options={{
          tabBarLabel: 'Notificaciones',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={MainPageComponent}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
