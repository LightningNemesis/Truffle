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

import CouponsData from '../constants/CouponsData';

const {width, height} = Dimensions.get('window');

const Coupons = ({navigation}) => {
  const [searchPromoCode, setSearchPromoCode] = React.useState();
  React.useEffect(() => {
    // console.log(CouponsData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="close"
            size={height * 0.03}
            color="#000"
            style={styles.closeBtn}
          />
        </TouchableOpacity>
        <Text style={styles.text_h1}>Enter Promo Code</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.inputView}>
          <Ionicons
            name="search"
            size={height * 0.017}
            color="#000"
            style={{paddingRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            importantForAutofill="no"
            placeholder="Enter Promo Code"
            placeholderTextColor="#000"
            keyboardType="default"
            onChangeText={(text) => searchPromoCode(text)}
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={true}
          horizontal={false}
          data={CouponsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Item item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const Item = ({item}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{padding: 10}}>
          <Text style={styles.text_h2}>{item.name}</Text>
          <Text style={styles.text_h3}>{item.description}</Text>
        </View>
        <TouchableOpacity onPress = {()=>alert('Promo Code Applied !')}>
          <Text style={styles.text_h2}>Apply</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.line}>
        ─────────────────────────────────────────────────────────────────────────
      </Text>
    </View>
  );
};

export default Coupons;

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
    fontWeight: '500',
    fontSize: width * 0.04,
    color: '#457B9D',
    paddingBottom: height * 0.01,
  },
  text_h3: {
    fontWeight: '200',
    fontSize: width * 0.03,
    color: '#000',
    paddingRight: height * 0.03,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: height * 0.05,
  },
  inputView: {
    flexDirection: 'row',
    width: width * 0.7,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.015,
    height: height * 0.059,
    marginBottom: height * 0.022,
    padding: height * 0.022,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  inputText: {color: '#003f5c'},
  line: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '100',
    fontSize: 5,
  },
  closeBtn: {
    left: height * -0.09,
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
});
