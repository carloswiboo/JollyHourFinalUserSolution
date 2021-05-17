import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import HeaderInicioComponent from '../templates/HeaderInicioComponent';
import CategoryListComponent from '../components/CategoryListComponent';
import CardComponent from '../components/CardComponent';

export default function MainPageComponent({navigation}) {
  return (
    <LinearGradient
      style={styles.loginBackground}
      colors={['#FC466B', '#3F5EFB']}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}>
      <SafeAreaView style={{width: '100%', flex: 1}}>
        <View>
          <HeaderInicioComponent />
          <CategoryListComponent />
        </View>
        <View style={styles.ScrollView}>
          <ScrollView
            contentContainerStyle={styles.scrollViewCards}
            contentInset={{top: 10}}
            automaticallyAdjustContentInsets={true}
            maximumZoomScale={1}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: 'center',
            }}>
            <CardComponent navigation={navigation} />
            <CardComponent navigation={navigation} />
            <CardComponent navigation={navigation} />
            <CardComponent navigation={navigation} />
            <CardComponent navigation={navigation} />
            <CardComponent navigation={navigation} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    alignItems: 'center',
  },
  ScrollView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    overflow: 'scroll',
  },
});
