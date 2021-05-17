import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPageComponent from './src/screens/MainPageComponent';
import LoginComponent from './src/screens/LoginComponent';
import CategoriesSelectComponent from './src/screens/CategoriesSelectComponent';
import TabsComponent from './src/templates/tabs/TabsComponent';
import PromotionDetailComponent from './src/screens/PromotionDetailComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationsComponent from './src/screens/NotificationsComponent';
import BusinessProfileComponent from './src/screens/BusinessProfileComponent';
export default function App() {
  const Stack = createStackNavigator();
  const [user, setUser] = useState(true);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      alert( "Valor Guardado en BD: " + value);
      setUser(value);
      debugger;
      if (value !== null) {
        // value previously stored
        alert(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  storeData("true");
  getData();

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'black'} StatusBarStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={LoginComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="categoriesSelect"
            component={CategoriesSelectComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainPageComponent"
            component={MainPageComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabsComponent"
            component={TabsComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PromotionDetailComponent"
            component={PromotionDetailComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NotificationsComponent"
            component={NotificationsComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BusinessProfileComponent"
            component={BusinessProfileComponent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
