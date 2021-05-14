import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';

const image = {
  uri: 'https://www.wiboo.com.mx/wp-content/uploads/2019/05/Duque.png',
};

const borderRadiusNumber = 10;

export default function CardComponent({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.companyData}
        onPress={() => navigation.navigate('businessProfile')}>
        <Image
          style={styles.imgCompany}
          source={{
            uri: 'https://www.wiboo.com.mx/wp-content/uploads/2021/05/chichos.jpg',
          }}
        />
        <Text style={styles.companyName}>Chicho's Hamburguesas</Text>
        <Text style={styles.ratingCompany}>
          <Icon iconStyle={{color: '#FFC700', fontSize: 10}} name="star" /> 4.5
        </Text>
      </TouchableOpacity>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{borderRadius: 15}}>
        <View style={styles.overlay} />
        <View style={styles.timeMessage}>
          <Text>Finaliza en 60 minutos!</Text>
        </View>
        <View style={styles.promotionDescription}>
          <Text style={styles.text}>70% de Descuento</Text>
          <Text style={styles.text}>En Hamburguesa BBQ</Text>
          <Text style={styles.textTerms}>
            Aplica solamente en la hamburguesa, no combos.
          </Text>
        </View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('promotionDetail')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: borderRadiusNumber,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    borderRadius: borderRadiusNumber,
  },
  textTerms: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    borderRadius: borderRadiusNumber,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: borderRadiusNumber,
  },
  companyData: {
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgCompany: {
    height: 30,
    width: 30,
    resizeMode: 'cover',
    borderRadius: 500,
    marginRight: 10,
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  companyName: {
    fontWeight: 'bold',
    color: '#1E1E1E',
    textAlign: 'left',
  },
  ratingCompany: {
    fontWeight: 'bold',
    color: '#FFC700',
  },
  timeMessage: {
    backgroundColor: '#FFBC00',
    position: 'absolute',
    paddingHorizontal: 15,
    marginTop: 17,
    width: 'auto',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    left: 0,
    top: 5,
    alignSelf: 'center',
  },
  promotionDescription: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
