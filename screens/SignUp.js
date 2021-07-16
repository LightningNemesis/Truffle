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

const {width, height} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'flex-start',
          top: -height * 0.13,
          left: height * 0.02,
          position: 'relative',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Icon name="arrow-back" size={height * 0.03} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text_h1}>Create your account</Text>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          keyboardType="name-phone-pad"
          onChangeText={(text) => setPhone(text)}
          autoCapitalize="none"
          maxLength={10}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('PhoneVerification');
        }}>
        <Text style={styles.loginText}>{'Next'}</Text>
      </TouchableOpacity>

      {/* *********** We will have to add a link to our T&C here ************* */}

      <Text style={styles.text_h2}>
        By signing up you agree to our Terms of Use {'\n'} and Privacy Policy
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginTop: -height * 0.055,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FAEE',
  },
  text_h1: {
    fontWeight: 'bold',
    fontSize: height * 0.022,
    paddingBottom: height * 0.041,
  },
  text_h2: {textAlign: 'center', paddingTop: height * 0.017},
  inputView: {
    width: width * 0.7,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.015,
    height: height * 0.055,
    marginBottom: height * 0.022,
    justifyContent: 'center',
    padding: height * 0.022,
  },
  loginBtn: {
    width: width * 0.7,
    backgroundColor: '#457B9D',
    borderRadius: height * 0.015,
    height: height * 0.055,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.036,
    marginBottom: height * 0.015,
  },
  loginText: {
    color: 'white',
    fontSize: height * 0.023,
  },
  inputText: {height: height * 0.055, color: '#003f5c'},
});
