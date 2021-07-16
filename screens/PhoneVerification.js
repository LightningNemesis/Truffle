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

const PhoneVerification = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [phone, setPhone] = React.useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'flex-start',
          top: -height * 0.2,
          left: height * 0.02,
          position: 'relative',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Icon name="arrow-back" size={height * 0.03} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text_h1}>Verification</Text>
      
      {/* **************** Change here for actual email ***************** */}
      <Text style={styles.text_h2}> 
        We've sent a verification code to {'\n'} Wendy@gmail.com 
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          importantForAutofill="no"
          placeholder="Enter OTP"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('CreateProfile');
        }}>
        <Text style={styles.loginText}>{'Verify'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneVerification;

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
    paddingBottom: height * 0.01,
  },
  text_h2: {
    textAlign: 'center',
    paddingTop: height * 0.017,
    paddingBottom: height * 0.06,
  },
  inputView: {
    width: width * 0.6,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.015,
    height: height * 0.055,
    marginBottom: height * 0.022,
    justifyContent: 'center',
    padding: height * 0.022,
  },
  loginBtn: {
    width: width * 0.4,
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
