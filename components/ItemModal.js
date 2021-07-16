
// Addition of selection items and the category to select from is Pending

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

const ItemModal = ({modalVisible, modalData, hideModal}) => {
  const [visiblity, setVisiblity] = React.useState();
  const [instructions, setInstructions] = React.useState();
  const [showWarning, setShowWarning] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  const onClick = () => {
    alert('clicked');
  };

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
        <Image
          resizeMode="cover"
          style={styles.headerImage}
          source={modalData.img}
        />
        <TouchableOpacity
          onPress={() => {
            hideModal();
          }}>
          <Ionicons
            name={'close-circle'}
            size={width * 0.1}
            color={'#fff'}
            style={{
              position: 'absolute',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.6,
              shadowRadius: 8.0,
              elevation: 24,
              top: -height * 0.17,
              left: width * 0.55,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.text_h1}>{modalData.name}</Text>
        <Text style={styles.text_h3}>{modalData.description}</Text>
        <Text style={styles.text_h2}>Choose Size</Text>
        <Text style={styles.text_h2}>Special Instructions</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            importantForAutofill="no"
            placeholder="Add a note (extra sauce, no options, etc)"
            placeholderTextColor="#A19595"
            keyboardType="default"
            onChangeText={(text) => setInstructions(text)}
            autoCapitalize="none"
          />
          <Text style={styles.line}>
            ──────────────────────────────────────────────
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.flatListMenuItemsQuantityBox}>
            <TouchableOpacity
              onPress={() => {
                let quantity_temp = quantity;
                if (quantity_temp < 15) {
                  setShowWarning(false);
                  setQuantity(quantity + 1);
                } else {
                  alert('Max quantity is 15');
                }
              }}>
              <Ionicons
                name={'add-circle'}
                size={width * 0.09}
                color={'#707070'}
                style={styles.incrementDecrementIcons}
              />
            </TouchableOpacity>

            {/* Update Dynamic Quantity per item here */}

            <Text style={styles.quantityDisplay}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => {
                let quantity_temp = quantity;
                if (quantity_temp >= 1) {
                  setShowWarning(false);
                  setQuantity(quantity - 1);
                } else {
                }
              }}>
              <Ionicons
                name={'remove-circle'}
                size={width * 0.09}
                color={'#707070'}
                style={styles.incrementDecrementIcons}
              />
            </TouchableOpacity>
          </View>

          {showWarning && (
            <Text style={{color: 'red'}}> Maximum Quantity is 15</Text>
          )}

          {/* Adding to Cart Here */}
          <TouchableOpacity
            disabled={quantity === 0}
            style={
              quantity === 0 ? styles.loginBtnInactive : styles.loginBtnActive
            }
            onPress={() => {
              hideModal();
            }}>
            <Text style={styles.loginText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ItemModal;

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
    width: width * 0.7,
    height: height * 0.7,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerImage: {
    width: width * 0.7,
    height: height * 0.2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
  },
  text_h1: {
    color: '#457B9D',
    fontSize: height * 0.035,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text_h2: {
    color: '#000',
    fontSize: height * 0.019,
    fontWeight: '300',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text_h3: {
    color: '#A19595',
    fontSize: height * 0.015,
    fontWeight: '300',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputView: {
    backgroundColor: '#F1FAEE',
    borderRadius: height * 0.012,
  },
  inputText: {
    textAlign: 'center',
    height: height * 0.055,
    color: '#A19595',
    fontSize: height * 0.014,
    fontWeight: '300',
  },
  line: {
    color: '#A19595',
    textAlign: 'center',
    fontSize: 5,
  },
  flatListMenuItemsQuantityBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F1FAEE',
    borderWidth: 2,
    borderRadius: 6,
    width: width * 0.18,
    height: width * 0.2,
    marginTop: width * 0.025,
  },
  incrementDecrementIcons: {
    paddingHorizontal: width * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  quantityDisplay: {
    fontSize: width * 0.07,
    fontWeight: '300',
    textAlign: 'center',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  loginBtnActive: {
    width: width * 0.5,
    backgroundColor: '#457B9D',
    borderRadius: height * 0.01,
    height: height * 0.054,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.01,
  },
  loginBtnInactive: {
    width: width * 0.5,
    backgroundColor: '#A19595',
    borderRadius: height * 0.01,
    height: height * 0.054,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.01,
  },
  loginText: {
    color: 'white',
    fontSize: height * 0.02,
  },
});
