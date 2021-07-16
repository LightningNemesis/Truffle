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

const CreateProfile = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text_h1}>Create your profile</Text>

      <View style={styles.inputView}>
        
        <TextInput
          style={styles.inputText}
          importantForAutofill="no"
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          keyboardType="default"
          onChangeText={(text) => setFirstName(text)}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          importantForAutofill="no"
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          keyboardType="default"
          onChangeText={(text) => setLastName(text)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('AddressEntry');
        }}>
        <Text style={styles.loginText}>{'Done'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateProfile;

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
    marginTop: height * 0.01,
    marginBottom: height * 0.015,
  },
  loginText: {
    color: 'white',
    fontSize: height * 0.023,
  },
  inputText: {height: height * 0.055, color: '#003f5c'},
});
