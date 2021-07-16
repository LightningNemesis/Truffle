import react from 'react';
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_FA from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const AddressModal = ({modalVisible, hideModal}) => {
  const [visiblity, setVisiblity] = React.useState();

  React.useEffect(() => {
    setVisiblity(modalVisible);
  }, []);

  return (
    <Modal
      style={styles.modalStyle}
      isVisible={modalVisible}
      onBackdropPress={() => {
        hideModal();
      }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: height * 0.03,
          }}>
          <TouchableOpacity
            onPress={() => {
              hideModal();
            }}>
            <Ionicons
              name="close"
              size={height * 0.03}
              color="#000"
              style={{left: -width * 0.1}}
            />
          </TouchableOpacity>
          <Text style={styles.text_h1}>Delivery Details</Text>
        </View>

        <View style={styles.inputView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon_FA
              name="map-marker"
              size={height * 0.03}
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
          <Ionicons
            name="navigate-outline"
            size={height * 0.03}
            color="#1D3557"
            style={{}}
          />
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
            hideModal();
          }}>
          <Text style={styles.loginText}>{'Done'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddressModal;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
  container: {
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    width: width * 0.7,
    height: height * 0.7,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  inputView: {
    width: width * 0.5,
    height: height * 0.05,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.01,
    marginBottom: height * 0.022,
    justifyContent: 'center',
    alignItems: 'center',
    padding: height * 0.022,
  },
  addressDisplayView: {
    width: width * 0.55,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.01,
    height: height * 0.05,
    alignItems: 'flex-start',
    paddingHorizontal: height * 0.02,
    justifyContent: 'center',
    marginVertical: height * 0.03,
  },
  text_h1: {
    fontWeight: 'bold',
    fontSize: height * 0.022,
    paddingBottom: height * 0.01,
  },
  inputText: {
    height: height * 0.055,
    color: '#003f5c',
    fontSize: height * 0.015,
  },
  loginText: {
    color: 'white',
    fontSize: height * 0.02,
  },
  loginBtn: {
    width: width * 0.4,
    height: height * 0.05,
    backgroundColor: '#457B9D',
    borderRadius: height * 0.015,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.04,
    marginBottom: height * 0.015,
  },
});
