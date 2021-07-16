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

const {width, height} = Dimensions.get('window');

const OrderSuccessfulModal = ({navigation, modalVisible, hideModal}) => {
  const [visiblity, setVisiblity] = React.useState();
  const [showWarning, setShowWarning] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  return (
    <Modal
      style={styles.modalStyle}
      isVisible={true}
      onBackdropPress={() => {
        hideModal();
      }}>
      <View style={styles.container}>
        {/* <TouchableOpacity>
          <Ionicons
            name={'close'}
            size={width * 0.08}
            color={'#000'}
            style={{position: 'absolute', left: width * 0.07, top: 30}}
          />
        </TouchableOpacity> */}
        <Ionicons
          name={'checkmark-circle'}
          size={width * 0.3}
          color={'#38cf0e'}
          style={{
            padding: 30,
            // shadowColor: '#0BFC05',
            // shadowOffset: {
            //   width: 5,
            //   height: 10,
            // },
            // shadowOpacity: 0.5,
            // shadowRadius: 20.3,
            // elevation: 30,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
          }}
        />

        <Text
          style={{
            fontSize: width * 0.05,
            fontWeight: '500',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}>
          Thank you for your order !
        </Text>
        <TouchableOpacity
          style={{paddingTop: 15}}
          onPress={() => {
            hideModal();
            navigation.navigate('OrderHistory');
          }}>
          <View
            style={{
              marginTop: height * 0.08,
              backgroundColor: '#457B9D',
              alignSelf: 'center',
              justifyContent: 'center',
              width: width * 0.7,
              height: height * 0.04,
              borderRadius: 10,
            }}>
            <Text style={styles.btnText}>View my Orders</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            hideModal();
            navigation.navigate('Home');
          }}>
          <View style={{marginTop: height * 0.03}}>
            <Text style={styles.btnTextBare}>Order something else</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default OrderSuccessfulModal;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
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
    backgroundColor: '#fff',
    width: width,
    height: height * 0.55,
    alignItems: 'center',
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: width * 0.045,
  },
  btnTextBare: {
    textAlign: 'center',
    color: '#457B9D',
    fontWeight: '500',
    fontSize: width * 0.045,
  },
});
