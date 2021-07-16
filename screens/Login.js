import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_FA from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{paddingTop: height*0.07}}>
        <Image style={styles.image} source={require('../assets/Logo.png')} />
      </View>
      <Text style={styles.text_h2}>
        Discover the best foods from {`\n`} over 2000 restaurants
      </Text>

      <Text style={styles.text_h1}>Sign in</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          importantForAutofill="no"
          placeholder="Email"
          placeholderTextColor="#003f5c"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPass(text)}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('AppHome');
        }}>
        <Text style={styles.loginText}>{'Sign in'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{paddingTop: height*0.02, paddingBottom: height*0.01}}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        <Text style={{color: 'white', fontSize: 16}}>{'Forgot Password?'}</Text>
      </TouchableOpacity>

      <Text style={styles.text_h2}> ──────── OR ────────</Text>

      <View style={styles.lowerContainer}>
        <TouchableOpacity
          style={styles.loginBtn_gf}
          onPress={() => {
            signIn(email, pass);
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <Icon name="facebook" size={height*0.034} color="#1D3557" style={{}} />
            <Text style={styles.loginText_fb}>{'Sign in with Facebook'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn_gf}
          onPress={() => {
            signIn(email, pass);
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
            }}>
            <Icon_FA name="google" size={height*0.03} color="#db3236" style={{}} />
            <Text style={styles.loginText_g}>{'Sign in with Google'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn_outline}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.loginText_outline}>{'Sign up with email'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#457B9D',
  },
  image: {},
  lowerContainer: {
    paddingTop: height*0.02
  },
  text_h2: {
    paddingTop: height*0.02,
    textAlign: 'center',
    color: '#fff',
    fontSize: height*0.018
  },
  text_h1: {
    marginTop: height*0.06,
    paddingBottom: height*0.019,
    textAlign: 'center',
    color: '#fff',
    fontSize: height*0.025
  },
  inputView: {
    width: width * 0.7,
    backgroundColor: '#F2EEEE',
    borderRadius: height*0.01,
    height: height*0.05,
    marginBottom: height*0.022,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {height: height*0.05, color: '#003f5c'},
  loginBtn: {
    width: width * 0.7,
    backgroundColor: '#1D3557',
    borderRadius: height*0.01,
    height: height*0.054,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height*0.01
  },
  loginBtn_gf: {
    width: width * 0.7,
    backgroundColor: '#fff',
    borderRadius: height*0.01,
    height: height*0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height*0.01
  },
  loginBtn_outline: {
    width: width * 0.7,
    margin: 1,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: height*0.013,
    height: height*0.054,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height*0.01
  },
  loginText: {
    color: 'white',
    fontSize: height*0.02,
  },
  loginText_fb: {
    paddingLeft: width*0.02,
    color: '#1D3557',
    fontSize: height*0.02,
  },
  loginText_g: {
    paddingLeft: width*0.04,
    color: '#db3236',
    fontSize: height*0.02,
  },
  loginText_outline: {
    color: 'white',
    fontSize: height*0.019,
  },
});
