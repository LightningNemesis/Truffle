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

import CategoryData from '../constants/CategoryData';

const {width, height} = Dimensions.get('window');

const SearchCategories = ({navigation}) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputView}>
          <Icon
            name="search"
            size={height * 0.017}
            color="#003f5c"
            style={{paddingRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            importantForAutofill="no"
            placeholder="Search Category"
            placeholderTextColor="#003f5c"
            keyboardType="default"
            onChangeText={(text) => setQuery(text)}
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CategoryData}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
        />
      </View>
    </View>
  );
};

const Item = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}>
      <View style={{padding: 10}}>
        <Image
          resizeMode="cover"
          style={{width: width * 0.45, height: height * 0.2, borderRadius: 25}}
          source={item.img}
        />
        <Text
          style={{
            fontSize: width * 0.05,
            color: '#fff',
            position: 'absolute',
            top: height * 0.17,
            left: width * 0.05,
            fontWeight: '600',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 8.0,

            elevation: 24,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCategories;

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
    flexDirection: 'row',
    width: width * 0.7,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.015,
    height: height * 0.059,
    marginBottom: height * 0.022,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
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
});
