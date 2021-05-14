import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Animated,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function LoginComponent({navigation}) {
  const [mostrarInicioSesion, setMostrarInicioSesion] = useState(
    new Animated.Value(0),
  );

  useEffect(() => {
    Animated.timing(mostrarInicioSesion, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [mostrarInicioSesion]);

  return (
    <LinearGradient
      style={styles.loginBackground}
      colors={['#FC466B', '#3F5EFB']}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}>
      <Image
        style={styles.logoLogin}
        source={require('../images/jollylogoapp.png')}
      />
      <View style={styles.begin}>
        <Text style={styles.messageApp}> ¡BIENVENIDO! </Text>
        <Text style={styles.subtitleApp}>
          Nos da mucho gusto que estés aquí
        </Text>
        <TouchableHighlight style={styles.botonBegin} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonBegin}>Comenzar</Text>
          </View>
        </TouchableHighlight>
      </View>

      <Animated.View style={[styles.loginFormView]}>
        <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 15}}>
          Empecemos{'\n'}aquí
        </Text>
        <Input
          inputStyle={inputStyles.userInput}
          placeholder="Correo Electrónico"
          containerStyle={{width: '100%'}}
          inputContainerStyle={{width: '100%'}}
        />
        <Input
          inputStyle={inputStyles.userInput}
          placeholder="Contraseña"
          secureTextEntry={true}
          containerStyle={{width: '100%'}}
          inputContainerStyle={{width: '100%'}}
        />
        <TouchableHighlight
          style={styles.buttonCreateAccount}
          onPress={() => navigation.navigate('categoriesSelect')}>
          <View style={styles.button}>
            <Text style={styles.buttonCreateAccountText}>Registrarme</Text>
          </View>
        </TouchableHighlight>
        <Text
          style={{
            opacity: 0.5,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}>
          O iniciar sesión con:{' '}
        </Text>

        <MaterialIcons button name="facebook" />
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    alignItems: 'center',
  },
  messageApp: {
    marginTop: 20,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitleApp: {
    marginTop: 20,
    color: 'white',
    fontSize: 14,
    fontWeight: '100',
  },
  logoLogin: {
    marginTop: 70,
    height: 150,
    resizeMode: 'contain',
  },
  begin: {
    position: 'absolute',
    bottom: '15%',
    alignItems: 'center',
  },
  buttonBegin: {
    marginTop: 25,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  loginFormView: {
    backgroundColor: '#fff',
    padding: 50,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  buttonCreateAccount: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
  },
  buttonCreateAccountText: {
    backgroundColor: '#0043FF',
    padding: 14,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    borderRadius: 500,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    fontWeight: '100',
  },
});

const inputStyles = StyleSheet.create({
  userInput: {
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
  },
});
