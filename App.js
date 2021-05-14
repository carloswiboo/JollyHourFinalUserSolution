import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPageComponent from './src/screens/MainPageComponent';
import LoginComponent from './src/screens/LoginComponent';
import CategoriesSelectComponent from './src/screens/CategoriesSelectComponent';

export default function App() {
  const Stack = createStackNavigator();
  const [user, setUser] = useState(true);

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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
