import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import GetCategories from '../utils/GetCategories';
import {Avatar, Badge, withBadge} from 'react-native-elements';

export default function CategoriesSelectComponent({navigation}) {
  const [categories, setCategories] = React.useState([
    {
      id: 1,
      nombre: 'Categoría 1',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isActive: false,
    },
    {
      id: 2,
      nombre: 'Categoría 2',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: false,
    },
    {
      id: 3,
      nombre: 'Categoría 3',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: true,
    },
    {
      id: 4,
      nombre: 'Categoría 4',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: true,
    },
    {
      id: 5,
      nombre: 'Categoría 5',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: false,
    },
    {
      id: 6,
      nombre: 'Categoría 6',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: true,
    },
    {
      id: 7,
      nombre: 'Categoría 7',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: true,
    },
    {
      id: 8,
      nombre: 'Categoría 8',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: true,
    },
    {
      id: 9,
      nombre: 'Categoría 9',
      url: 'https://reactnative.dev/img/tiny_logo.png',
      isAactive: true,
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        {item.isAactive === true ? (
          <Badge style={styles.badgesSuccess} status="success" />
        ) : null}
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.url,
          }}
        />

        <Text style={{fontWeight: 'bold', color: 'black'}}>{item.nombre}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.loginBackground}
        colors={['#FC466B', '#3F5EFB']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>Elige Tus{'\n'}Intereses</Text>
          <Text style={styles.textSubtitle}>
            Recibirás las mejores promociones conforme los intereses que elijas.
          </Text>
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            style={styles.scrollViewContainer}
            numColumns={2}
            vertical
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.containerButtons}>
          <Button
            buttonStyle={styles.buttonOmit}
            type="outline"
            title="Omitir"
            onPress={() => navigation.navigate('MainPageComponent')}
          />
          <Button
            buttonStyle={styles.buttonNext}
            title="Siguiente"
            onPress={() => navigation.navigate('MainPageComponent')}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  categoriesContainer: {
    backgroundColor: 'white',
    flex: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
  },
  scrollViewContainer: {
    flex: 1,
    margin: 40,
    width: '90%',
  },
  containerButtons: {
    backgroundColor: 'white',
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginBackground: {
    flex: 1,
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  textSubtitle: {
    paddingVertical: 10,
    color: 'white',
    fontSize: 20,
  },
  buttonOmit: {
    borderRadius: 40,
    paddingHorizontal: 30,
  },
  buttonNext: {
    borderRadius: 40,
    paddingHorizontal: 30,
  },
  item: {
    alignItems: 'center',
    height: 45,
    flex: 1,
    width: '100%',
    margin: 20,
    borderRadius: 900,
    position: 'relative',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  badgesSuccess: {
    position: 'absolute',
    top: 0,
    right: 0,
    textAlign: 'right',
  },
});
