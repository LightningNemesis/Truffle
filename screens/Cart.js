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

import HomeData from '../constants/HomeData';

const {width, height} = Dimensions.get('window');

const Cart = ({navigation}) => {
  let cartEmpty = false;

  const [couponApplied, setCouponApplied] = React.useState(true);
  // const [couponName, setCouponName] = React.useState('Check available discounts');
  const defaultCoupon = 'Check available discounts';
  const updatedCoupon = 'Applied Coupon: HAPPY50';

  // const changeToApplied = (id) => {
  //   if (id !== null) {
  //     alert(id);
  //   }
  //   setCouponApplied(true);
  // };

  if (cartEmpty) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center', top: -height*0.17}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={height * 0.03}
              color="#000"
              style={{left: height * -0.16}}
            />
          </TouchableOpacity>
          <Text style={styles.text_h1}>Cart</Text>
        </View>

        <View style={{marginTop: 10, justifyContent:'center', alignItems:'center'}}>
          <Ionicons
            name="cart-outline"
            size={height * 0.2}
            color="#457B9D"
            style={{alignSelf: 'center', }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: height * 0.03,
              color: '#457B9D',
              paddingBottom: height * 0.01,
            }}>
            Your Cart is empty
          </Text>
          <TouchableOpacity
            style={{paddingTop: height*0.09}}
            onPress={() => navigation.navigate('Home')}>
            <View
              style={{
                backgroundColor: '#457B9D',
                alignSelf: 'center',
                justifyContent: 'center',
                width: width * 0.7,
                height: height * 0.04,
                borderRadius: 10,
              }}>
              <Text style={styles.btnText}>Keep Browsing</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={height * 0.03}
              color="#000"
              style={{left: height * -0.16}}
            />
          </TouchableOpacity>
          <Text style={styles.text_h1}>Cart</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={true}
          horizontal={false}
          data={HomeData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <RestroItem item={item} />}
        />

        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
            <Text
              adjustsFontSizeToFit={true}
              numberOfLines={1}
              style={styles.cartCouponsText}>
              {couponApplied ? updatedCoupon : defaultCoupon}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{flex: 3, alignItems: 'flex-start', paddingLeft: '8%'}}>
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
              <Text style={styles.cartItemText}>€ Hello</Text>
              <Text style={styles.cartItemText}>€ Hello</Text>
              <Text style={styles.cartItemText}>€ Hello</Text>
            </View>
          </View>
          <Text style={styles.line}>
            ─────────────────────────────────────────────────────────────────────────
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{flex: 3, alignItems: 'flex-start', paddingLeft: '8%'}}>
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
                paddingTop: 10,
              }}>
              <Text style={styles.cartTotalText}>€ Hello</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{paddingTop: 15}}
            onPress={() => navigation.navigate('Payments')}>
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
      </SafeAreaView>
    );
};

const RestroItem = ({item}) => {
  return (
    <View style={{}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
          <Image style={styles.restroLogo} source={item.img} />
        </View>
        <Text style={styles.text_h1}>{item.rest_name}</Text>
      </View>
      <View style={{width: width, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={true}
          horizontal={false}
          data={item.menu}
          keyExtractor={(item) => item.skus.toString()}
          renderItem={({item}) => <MenuItem item={item} />}
        />
      </View>
      <Text style={styles.line}>
        ─────────────────────────────────────────────────────────────────────────
      </Text>
    </View>
  );
};

const MenuItem = ({item}) => {
  React.useEffect(() => {
    // console.log(item);
  }, []);

  return (
    <View style={styles.flatListItemsContainer}>
      <Image style={styles.flatListMenuItemsLogo} source={item.img} />

      <View style={styles.flatListMenuItemsText}>
        <Text style={styles.menuTextHeading}>{item.name}</Text>
        <Text style={styles.menuTextDescription}>{item.description}</Text>
      </View>

      <View style={styles.unitPriceBox}>
        {/* Check for Unit Price correct display here */}
        <Text style={styles.unitPriceBoxText}>€ {item.price}</Text>
        <View style={styles.flatListMenuItemsQuantityBox}>
          <TouchableOpacity>
            <Ionicons
              name={'add-outline'}
              size={width * 0.05}
              color={'#457B9D'}
              style={styles.incrementDecrementIcons}
            />
          </TouchableOpacity>

          {/* Update Dynamic Quantity per item here */}
          <Text style={styles.quantityDisplay}>1</Text>

          <TouchableOpacity>
            <Ionicons
              name={'remove-outline'}
              size={width * 0.05}
              color={'#457B9D'}
              style={styles.incrementDecrementIcons}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F1FAEE',
  },
  text_h1: {
    fontWeight: '400',
    fontSize: height * 0.03,
    color: '#457B9D',
    paddingBottom: height * 0.01,
  },
  restroLogo: {
    width: height * 0.1,
    height: height * 0.1,
    borderRadius: height / 2,
    alignItems: 'flex-start',
  },
  line: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '100',
    fontSize: 5,
  },
  flatListItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.04,
  },
  flatListMenuItemsLogo: {
    width: height * 0.06,
    height: height * 0.07,
    borderRadius: height * 0.01,
    flex: 0.5,
    flexWrap: 'wrap',
  },
  flatListMenuItemsText: {
    flex: 1,
    padding: width * 0.03,
  },
  flatListMenuItemsQuantityBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#457B9D',
    borderWidth: 2,
    borderRadius: 6,
    width: width * 0.18,
    height: height * 0.03,
    marginTop: width * 0.025,
  },
  unitPriceBox: {flex: 0.5, alignItems: 'center'},
  unitPriceBoxText: {flexWrap: 'wrap', textAlign: 'center'},
  quantityDisplay: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: '#457B9D',
  },
  incrementDecrementIcons: {paddingHorizontal: width * 0.02},
  menuTextHeading: {
    fontSize: height * 0.018,
    flexWrap: 'wrap',
  },
  menuTextDescription: {
    fontSize: height * 0.014,
    fontWeight: '200',
    flexWrap: 'wrap',
  },
  cartContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#F1FAEE',
    width: width,
    height: height * 0.27,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.66,
    shadowRadius: 11.14,
    elevation: 17,
  },
  cartItemText: {
    fontSize: width * 0.04,
    color: '#000',
    fontWeight: '300',
  },
  cartCouponsText: {
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.015,
    fontSize: width * 0.04,
    color: '#457B9D',
    fontWeight: '400',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
