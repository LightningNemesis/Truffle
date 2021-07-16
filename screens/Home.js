import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeData from '../constants/HomeData';

const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputView}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}>
            <Icon
              name="search"
              size={height * 0.017}
              color="#003f5c"
              style={{paddingRight: 10}}
            />
            <TextInput
              style={styles.inputText}
              importantForAutofill="no"
              placeholder="Search Restaurants"
              placeholderTextColor="#003f5c"
              keyboardType="default"
              onChangeText={(text) => setQuery(text)}
              autoCapitalize="none"
            />
          </View>
        </View>
        <TouchableOpacity>
          <View style={{alignItems: 'flex-end'}}>
            <Icon
              name="sort"
              size={height * 0.048}
              color="#457B9D"
              style={{
                paddingLeft: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={HomeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Item item={item} navigation={navigation} />}
      />
    </View>
  );
};

const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RestaurantHome', {item})}>
      <View style={{padding: 10}}>
        <Image
          resizeMode="cover"
          style={{width: width * 0.9, height: height * 0.3, borderRadius: 25}}
          source={item.img}
        />
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
          <View>
            <Text style={styles.text_h1}>{item.rest_name}</Text>
            <Text style={styles.text_h2}>{item.tags}</Text>
            <Text style={styles.text_h2}>
              Delivery Time: {item.est_delivery_time}-
              {item.est_delivery_time + 10} Mins
            </Text>
          </View>

          <Icon
            name="favorite-border"
            size={height * 0.035}
            color="#457B9D"
            style={{paddingLeft: 120}}
          />
        </View>
        <Text style={styles.line}>
          ─────────────────────────────────────────────────────────────────────────
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FAEE',
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: height * 0.07,
  },
  inputView: {
    width: width * 0.7,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.015,
    height: height * 0.059,
    marginBottom: height * 0.022,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: height * 0.022,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text_h2: {
    color: '#242629',
    fontSize: height * 0.018,
    fontWeight: '300',
  },
  text_h1: {
    color: '#457B9D',
    fontSize: height * 0.025,
  },
  inputText: {color: '#003f5c'},
  line: {
    paddingVertical: 10,
    fontWeight: '100',
    fontSize: 5,
  },
});
