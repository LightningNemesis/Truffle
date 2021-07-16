import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

import AddressModal from '../components/AddressModal';
import OrderSuccessfulModal from '../components/OrderSuccesfulModal'

const {width, height} = Dimensions.get('window');
const CODLogo = require('../assets/money.png');
const PayPalLogo = require('../assets/paypal.png');
const StripeLogo = require('../assets/stripe.png');

const Payments = ({navigation}) => {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [orderModalIsVisible, setOrderModalIsVisible] = React.useState(false);
  const [addressValid, setAddressValid] = React.useState(false);

  const [pickUpState, setPickUpState] = React.useState(true);
  const [deliveryState, setDeliveryState] = React.useState(false);

  const [codPaySelected, setCodPaySelected] = React.useState(false);
  const [stripePaySelected, setStripePaySelected] = React.useState(false);
  const [paypalPaySelected, setPaypalPaySelected] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');

  const [promoApplied, setPromoApplied] = React.useState(false);

  const [tipLow, setTipLow] = React.useState(false);
  const [tipMid, setTipMid] = React.useState(false);
  const [tipHigh, setTipHigh] = React.useState(false);

  let date = [
    {
      value: 'Today',
      key: '0',
    },
    {
      value: 'Tomorrow',
      key: '1',
    },
    {
      value: 'Day After',
      key: '2',
    },
  ];

  let time = [
    {
      value: '3 am',
    },
    {
      value: '4 am',
    },
    {
      value: '5 am',
    },
  ];

  const _hideModal = (msg) => {
    if (msg !== undefined) {
      alert(msg);
    }
    setModalIsVisible(false);
  };

  const _hideOrderModal = (msg) => {
    if(msg!==undefined){
      alert(msg)
    }
    setOrderModalIsVisible(false);
  };

  React.useEffect(() => {
    // console.log(date.value);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {modalIsVisible && (
        <AddressModal modalVisible={modalIsVisible} hideModal={_hideModal} />
      )}
      {orderModalIsVisible && (
        <OrderSuccessfulModal modalVisible={modalIsVisible} navigation={navigation} hideModal={_hideOrderModal} />
      )}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="close"
            size={height * 0.03}
            color="#000"
            style={styles.closeBtn}
          />
        </TouchableOpacity>
        <Text style={styles.text_h1}>Order Details</Text>
      </View>

      <View
        style={{
          flex: 1,
          paddingTop: height * 0.03,
        }}>
        <Text style={styles.text_h2}>
          How would you like to place your order?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: height * 0.01,
          }}>
          <TouchableOpacity
            onPress={() => {
              setPickUpState(true);
              setDeliveryState(false);
            }}>
            <View
              style={pickUpState ? styles.pickupActive : styles.pickupInActive}>
              <Text style={styles.pickupText}>Pick Up</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModalIsVisible(true);
              setPickUpState(false);
              setDeliveryState(true);
            }}>
            <View
              style={
                deliveryState ? styles.deliveryActive : styles.deliveryInActive
              }>
              <Text style={styles.deliveryText}>Delivery</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.text_warning}>
          {addressValid === false &&
          deliveryState === true &&
          modalIsVisible === false
            ? 'Please enter a valid address'
            : ''}
        </Text>
        <View style={{paddingBottom: height * 0.01}}>
          <Text style={styles.text_h2}>When would you like your food?</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: height * 0.01,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text_h3}>Select Date</Text>
            <Picker
              selectedValue={selectedDate}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDate(itemValue)
              }
              style={styles.pickerBox}>
              {date.map((item) => {
                return <Picker.Item label={item.value} value={item.value} />;
              })}
            </Picker>
          </View>

          <View style={{paddingRight: 10, alignItems: 'center'}}>
            <Text style={styles.text_h3}>Select Time</Text>
            <Picker
              selectedValue={selectedTime}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedTime(itemValue)
              }
              style={styles.pickerBox}>
              {time.map((item) => {
                return <Picker.Item label={item.value} value={item.value} />;
              })}
            </Picker>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: height * 0.03,
            paddingBottom: height * 0.016,
          }}>
          <Text style={styles.text_h3}>Payment Method</Text>
          <TouchableOpacity>
            <Text style={styles.text_Add}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              setCodPaySelected(true);
              setStripePaySelected(false);
              setPaypalPaySelected(false);
            }}>
            <View
              style={
                codPaySelected
                  ? styles.paymentActiveButton
                  : styles.paymentInactiveButtons
              }>
              <Image
                resizeMode="contain"
                style={styles.codLogo}
                source={CODLogo}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: width * 0.03,
                  fontWeight: '500',
                  paddingTop: 10,
                }}>
                COD
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => {
              setCodPaySelected(false);
              setStripePaySelected(true);
              setPaypalPaySelected(false);
            }}>
            <View
              style={
                stripePaySelected
                  ? styles.paymentActiveButton
                  : styles.paymentInactiveButtons
              }>
              <Image
                resizeMode="contain"
                style={styles.stripeLogo}
                source={StripeLogo}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCodPaySelected(false);
              setStripePaySelected(false);
              setPaypalPaySelected(true);
            }}>
            <View
              style={
                paypalPaySelected
                  ? styles.paymentActiveButton
                  : styles.paymentInactiveButtons
              }>
              <Image
                resizeMode="contain"
                style={styles.paypalLogo}
                source={PayPalLogo}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cartContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-start', paddingLeft: '8%'}}>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={{
                  fontSize: width * 0.04,
                  fontWeight: '500',
                  paddingBottom: 12,
                }}>
                Promo Code
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={{
                  fontSize: width * 0.04,
                  fontWeight: '500',
                  paddingBottom: 12,
                }}>
                Add Tip
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.cartItemText}>
                • Subtotal
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.cartItemText}>
                • Delivery Charge
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.cartItemText}>
                • Discount
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'flex-end',
                paddingRight: '10%',
                paddingTop: 10,
              }}>

              <TouchableOpacity onPress={()=>navigation.navigate('Coupons')}>
                <View style={styles.promoBox}>
                  <Text style={{color: '#457B9D'}}>HAPPY50</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.tipContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setTipLow(true);
                    setTipMid(false);
                    setTipHigh(false);
                  }}>
                  <View
                    style={
                      tipLow
                        ? styles.activePromoTipBtn
                        : styles.inActivePromoTipBtn
                    }>
                    <Text style={{color: tipLow ? '#fff' : '#457B9D'}}>
                      € 1,00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setTipLow(false);
                    setTipMid(true);
                    setTipHigh(false);
                  }}>
                  <View
                    style={
                      tipMid
                        ? styles.activePromoTipBtn
                        : styles.inActivePromoTipBtn
                    }>
                    <Text style={{color: tipMid ? '#fff' : '#457B9D'}}>
                      € 2,00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setTipLow(false);
                    setTipMid(false);
                    setTipHigh(true);
                  }}>
                  <View
                    style={
                      tipHigh
                        ? styles.activePromoTipBtn
                        : styles.inActivePromoTipBtn
                    }>
                    <Text style={{color: tipHigh ? '#fff' : '#457B9D'}}>
                      € 3,00
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text style={styles.cartItemText}>€ Hello</Text>
              <Text style={styles.cartItemText}>€ Hello</Text>
              <Text style={styles.cartItemText}>€ Hello</Text>
            </View>
          </View>
          <Text style={styles.line}>
            ─────────────────────────────────────────────────────────────────────────
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{alignItems: 'flex-start', paddingLeft: '8%'}}>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                style={styles.cartTotalText}>
                • Total
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                alignItems: 'flex-end',
                paddingRight: '10%',
              }}>
              <Text style={styles.cartTotalText}>€ Hello</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{paddingTop: 15}}
            onPress={() => setOrderModalIsVisible(true)}>
            <View
              style={{
                backgroundColor: '#457B9D',
                alignSelf: 'center',
                justifyContent: 'center',
                width: width * 0.7,
                height: height * 0.04,
                borderRadius: 10,
              }}>
              <Text style={styles.btnText}>Order and Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F1FAEE',
  },
  text_h1: {
    fontWeight: '200',
    fontSize: width * 0.055,
    color: '#000',
    marginTop: height * 0.013,
  },
  text_h2: {
    fontWeight: '300',
    fontSize: width * 0.04,
    color: '#000',
  },
  text_warning: {
    fontWeight: '500',
    fontSize: width * 0.04,
    color: '#000',
    textAlign: 'center',
    paddingTop: height * 0.01,
    color: '#db3236',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text_h3: {
    fontWeight: '400',
    fontSize: width * 0.04,
    color: '#000',
  },
  text_Add: {
    fontWeight: '400',
    fontSize: width * 0.04,
    color: '#457B9D',
  },
  closeBtn: {
    left: height * -0.1,
    marginTop: height * 0.013,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  pickupText: {
    fontWeight: '400',
    fontSize: width * 0.04,
    textAlign: 'center',
    color: '#fff',
    paddingRight: height * 0.03,
  },
  deliveryText: {
    fontWeight: '400',
    fontSize: width * 0.04,
    textAlign: 'center',
    color: '#fff',
    paddingRight: height * 0.03,
  },
  pickupActive: {
    paddingLeft: width * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.34,
    height: height * 0.04,
    backgroundColor: '#457B9D',
    borderRadius: 30,
  },
  pickupInActive: {
    paddingLeft: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.34,
    height: height * 0.04,
    backgroundColor: '#A09898',
    borderRadius: 30,
  },
  deliveryActive: {
    paddingLeft: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.34,
    height: height * 0.04,
    backgroundColor: '#457B9D',
    borderRadius: 30,
  },
  deliveryInActive: {
    paddingLeft: width * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.34,
    height: height * 0.04,
    backgroundColor: '#A09898',
    borderRadius: 30,
  },
  pickerBox: {
    justifyContent: 'center',
    top: 15,
    height: height * 0.1,
    width: width * 0.4,
    transform: [{scaleX: 0.7}, {scaleY: 0.68}],
  },
  codLogo: {
    width: height * 0.1,
    height: height * 0.07,
  },
  stripeLogo: {
    width: height * 0.14,
    height: height * 0.1,
  },
  paypalLogo: {
    width: height * 0.12,
    height: height * 0.1,
  },
  paymentInactiveButtons: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  paymentActiveButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.49,
    shadowRadius: 14.14,
    elevation: 17,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  cartContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#F1FAEE',
    width: width * 0.9,
    height: height * 0.27,
    marginTop: height * 0.045,
  },
  line: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '100',
    fontSize: 5,
  },
  cartItemText: {
    fontSize: width * 0.035,
    color: '#000',
    fontWeight: '400',
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    width: width * 0.5,
  },
  activePromoTipBtn: {
    marginBottom: 12,
    width: width * 0.15,
    height: height * 0.025,
    backgroundColor: '#457B9D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  inActivePromoTipBtn: {
    marginBottom: 12,
    width: width * 0.15,
    height: height * 0.025,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  promoBox: {
    marginBottom: 12,
    width: width * 0.25,
    height: height * 0.025,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  cartTotalText: {
    fontSize: width * 0.05,
    color: '#000',
    fontWeight: '400',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: width * 0.045,
  },
});
