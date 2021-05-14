import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainPageComponent from '../../screens/MainPageComponent';

const Tab = createMaterialBottomTabNavigator();

export default function TabsComponent({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="paginaPrincipal"
      activeColor="#e91e63"
      inactiveColor="white"
      tabBarBadge={true}
      labeled={true}
      shifting={false}
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        labeled={true}
        name="PaginaPrincipal"
        component={MainPageComponent}
        navigation={navigation}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        labeled={true}
        name="Buscar"
        component={MainPageComponent}
        navigation={navigation}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="search-web" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Mis Promociones"
        component={MainPageComponent}
        options={{
          tabBarLabel: 'Mi Jolly',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={MainPageComponent}
        options={{
          tabBarLabel: 'Notificaciones',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={MainPageComponent}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
