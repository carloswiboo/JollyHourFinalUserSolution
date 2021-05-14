import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import HeaderInicioComponent from '../templates/HeaderInicioComponent';
import LinearGradient from 'react-native-linear-gradient';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {Icon} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Share from 'react-native-share';
export default function PromotionDetailComponent({navigation}) {
  const imageFondo = {
    uri: 'https://www.wiboo.com.mx/wp-content/uploads/2021/05/zulu-fernando-UM4d6RsrkmM-unsplash-scaled.jpg',
  };

  const SharePromotion = async () => {
    const shareOptions = {
      message: 'He Compartido la promoción',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ImageBackground source={imageFondo} style={styles.imageBackground}>
        <View style={styles.opacity}>
          <View style={styles.companyData}>
            <Image
              style={styles.imgCompany}
              source={{
                uri: 'https://www.wiboo.com.mx/wp-content/uploads/2021/05/chichos.jpg',
              }}
            />
            <Text style={styles.companyName}>Chicho's Hamburguesas</Text>
            <Text style={styles.ratingCompany}>
              <Icon iconStyle={{color: '#FFC700', fontSize: 10}} name="star" />{' '}
              4.5
            </Text>
          </View>
          <View style={styles.promotionNameContainer}>
            <Text style={styles.promotionName}>Nombre de la Promoción</Text>
            <Text style={styles.promotionNameSubtitle}>
              Nombre de la Promoción
            </Text>
          </View>
          <View style={styles.containerDescription}>
            <View style={styles.containerCounter}>
              <Text>Finaliza en 30 minutos</Text>
            </View>
            <View style={styles.containerDescriptionText}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Descripción:
              </Text>
              <Text style={{textAlign: 'justify'}}>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                in tempus nulla. Nam congue mauris at leo rutrum, quis malesuada
                urna dignissim. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nunc sit amet urna
                mattis, condimentum odio ac, egestas sapien. Nam venenatis nibh
                quam, sit amet sollicitudin sapien volutpat et. Suspendisse a
                orci venenatis, laoreet odio varius, tincidunt elit. Sed mi
                erat, hendrerit sed ipsum ut, mollis condimentum tortor. Sed ut
                accumsan nulla. Duis mollis tincidunt nisi ut aliquet. Integer
                ac lectus vitae libero vestibulum laoreet. Praesent sodales,
                mauris sit amet fringilla dictum, eros elit commodo mi, quis
                dignissim enim risus eget risus. Quisque viverra nibh diam, ac
                pellentesque odio viverra in. Praesent neque nulla, venenatis ut
                risus non, pellentesque dignissim justo.
              </Text>
            </View>
            <View style={styles.buttonsShare}>
              <Button
                icon={{
                  name: 'arrow-right',
                  size: 10,
                  color: 'white',
                }}
                title="Obtener Promoción"
                containerStyle={{marginBottom: 5}}
              />
              <Button
                icon={{
                  name: 'arrow-right',
                  size: 10,
                  color: 'white',
                }}
                title="Compartir Promoción"
                containerStyle={{marginBottom: 5}}
                type="clear"
                onPress={() => SharePromotion()}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  gradientFull: {
    flex: 1,
  },
  containerDetail: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'stretch',
  },
  opacity: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  companyData: {
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
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
    color: '#fff',
    textAlign: 'left',
  },
  ratingCompany: {
    fontWeight: 'bold',
    color: '#FFC700',
  },
  promotionNameContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 90,
  },
  promotionName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  promotionNameSubtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '100',
  },
  containerDescription: {
    width: '100%',
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    paddingVertical: 30,
  },
  containerCounter: {
    backgroundColor: '#fBBC00',
    position: 'absolute',
    top: 40,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerDescriptionText: {
    position: 'absolute',
    top: 100,
    left: 30,
    right: 30,
  },
  buttonsShare: {
    position: 'absolute',
    bottom: 15,
    left: 30,
    right: 30,
  },
});
