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

const AddressEntry = ({navigation}) => {
  const [manualAddress, setManualAddress] = React.useState('');

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
            navigation.navigate('CreateProfile');
          }}>
          <Icon name="arrow-back" size={height * 0.03} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text_h1}>Delivery Details</Text>

      <View style={styles.inputView}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
          }}>
          <Icon_FA
            name="map-marker"
            size={height * 0.036}
            color="#1D3557"
            style={{paddingRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            importantForAutofill="no"
            placeholder="Enter a new address"
            placeholderTextColor="#003f5c"
            keyboardType="default"
            onChangeText={(text) => setManualAddress(text)}
            autoCapitalize="none"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          paddingBottom: height * 0.03,
        }}>
        <Icon name="near-me" size={height * 0.036} color="#1D3557" style={{}} />
        <Text>Use the current address</Text>
      </View>

      <TouchableOpacity
        style={styles.addressDisplayView}
        onPress={() => {
        //   navigation.navigate('ForgotPassword');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="add-location"
            size={height * 0.03}
            color="#1D3557"
            style={{}}
          />
          <Text style={styles.loginText_g}>{'Default Current Address'}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('AppHome');
        }}>
        <Text style={styles.loginText}>{'Done'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressEntry;

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
    width: width * 0.8,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.015,
    height: height * 0.085,
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
    marginTop: height * 0.01,
    marginBottom: height * 0.015,
  },
  addressDisplayView: {
    width: width * 0.7,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.01,
    height: height * 0.05,
    alignItems: 'flex-start',
    paddingHorizontal: height * 0.02,
    justifyContent: 'center',
    marginVertical: height * 0.01,
  },
  loginText: {
    color: 'white',
    fontSize: height * 0.023,
  },
  inputText: {
    height: height * 0.055,
    color: '#003f5c',
    fontSize: height * 0.015,
  },
  loginText_g: {
    paddingLeft: width * 0.04,
    color: '#003f5c',
    fontSize: height * 0.015,
  },
});
