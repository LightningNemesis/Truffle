import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  return (
    <Swiper
      style={styles.wrapper}
      height={height}
      showsButtons={false}
      loop={false}>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/swipe_1.png')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            Fast Delivery to your place guaranteed
          </Text>
          <Text style={styles.text_h2}>
            Fast Delivery to your home, office {`\n`} or wherever you are
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/swipe_3.png')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            Search and choose your {`\n`} favourite foods
          </Text>
          <Text style={styles.text_h2}>
            Discover the best foods from over {`\n`} 2000 restaurants
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/swipe_2.png')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            Search and choose your {`\n`} favourite foods
          </Text>
          <Text style={styles.text_h2}>
            Discover the best foods from over {`\n`} 2000 restaurants
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/swipe_4.png')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            For the best food ordering experience
          </Text>
          <TouchableOpacity
            style={styles.login_button}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.login_button_text}>Get started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#F1FAEE'},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text_container: {
    marginTop: 30,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_h1: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text_h2: {
    paddingTop: 20,
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  image: {
    width,
    flex: 1,
  },
  login_button: {
    width: 220,
    height: 46,
    backgroundColor: '#457B9D',
    borderRadius: 10,
    marginTop: 20,
    elevation: 10,
  },
  login_button_text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
