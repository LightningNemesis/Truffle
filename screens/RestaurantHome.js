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
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ItemModal from '../components/ItemModal';

const {width, height} = Dimensions.get('window');

const RestaurantHome = ({route}) => {
  const data = route.params.item;

  const [hasCart, setHasCart] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const _onPressItem = (item) => {
    _showModal(item);
  };

  const _showModal = (selectedItem) => {
    setModalIsVisible(true);
    setModalData(selectedItem);
  };

  const _hideModal = (msg) => {
    if(msg!==undefined){
      alert(msg)
    }
    setModalIsVisible(false);
    setModalData({});
  };

  React.useEffect(() => {
    // console.log(data);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{width: width, flex: 1}}>
        <FlatList
          // stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={true}
          horizontal={false}
          data={data.menu}
          keyExtractor={(item) => item.skus.toString()}
          renderItem={({item}) => (
            <Item item={item} _onPressItem={_onPressItem} />
          )}
          ListHeaderComponent={<HeaderComponent data={data} />}
        />
      </View>
      {modalIsVisible && (
        <ItemModal
          modalVisible={modalIsVisible}
          modalData={modalData}
          hideModal={_hideModal}
        />
      )}
      {hasCart && (
        <TouchableOpacity>
          <View style={styles.cartContainer}>
            <View
              style={{paddingLeft: width * 0.08, paddingRight: width * 0.5}}>
              <Text style={styles.cartItemText}>0 Items</Text>
              <Text style={styles.cartTotalText}>€ 0 plus taxes</Text>
            </View>

            <Ionicons
              name={'cart-outline'}
              size={width * 0.08}
              color={'#fff'}
              style={{}}
            />

            <Ionicons
              name={'chevron-forward-outline'}
              size={width * 0.06}
              color={'#fff'}
              style={{}}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const HeaderComponent = ({data}) => {
  const [searchData, setSetSearchData] = React.useState('');

  return (
    <View style={{alignItems: 'center'}}>
      <Image resizeMode="cover" style={styles.headerImage} source={data.img} />

      <View style={styles.titleBox}>
        <View>
          <Image style={styles.restroLogo} source={data.img} />
        </View>
        <View style={{paddingLeft: height * 0.029}}>
          <Text style={styles.text_h1}>{data.rest_name}</Text>
          <Text style={styles.text_h2}>{data.tags}</Text>
          <Text style={styles.text_h3}>({data.ratings} Reviews)</Text>
          <Text style={styles.text_h2}>
            Delivery Time: {data.est_delivery_time}-
            {data.est_delivery_time + 10} mins
          </Text>
        </View>
      </View>

      <View style={styles.inputView}>
        <Ionicons
          name={'search-outline'}
          size={width * 0.05}
          color={'#457B9D'}
          style={styles.searchLogo}
        />

        <TextInput
          style={styles.inputText}
          importantForAutofill="no"
          placeholder="Search Menu"
          placeholderTextColor="#000"
          keyboardType="default"
          onChangeText={(text) => setSetSearchData(text)}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const Item = ({item, _onPressItem}) => {
  return (
    <TouchableOpacity onPress={() => _onPressItem(item)}>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
  },
  headerImage: {
    width: width,
    height: height * 0.35,
  },
  restroLogo: {
    width: height * 0.1,
    height: height * 0.1,
    borderRadius: height / 2,
    alignItems: 'flex-start',
  },
  searchLogo: {
    alignSelf: 'center',
    paddingHorizontal: width * 0.05,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FAEE',
    width: width * 0.8,
    height: height * 0.19,
    transform: [{translateY: -height * 0.07}, {translateX: width * 0}],
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text_h1: {
    textAlign: 'center',
    color: '#457B9D',
    fontSize: height * 0.025,
    paddingBottom: height * 0.01,
  },
  text_h2: {
    textAlign: 'center',
    color: '#242629',
    fontSize: height * 0.014,
    paddingBottom: height * 0.01,
  },
  text_h3: {
    textAlign: 'center',
    color: '#457B9D',
    fontSize: height * 0.018,
    paddingBottom: height * 0.01,
  },
  inputView: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#F2EEEE',
    borderRadius: height * 0.012,
    flexDirection: 'row',
    transform: [{translateY: -height * 0.04}, {translateX: width * 0}],
  },
  inputText: {
    height: height * 0.055,
    color: 'black',
    fontSize: height * 0.017,
    fontWeight: '300',
  },
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
    backgroundColor: '#457B9D',
    width: width,
    height: height * 0.055,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemText: {
    fontSize: width * 0.04,
    color: 'white',
    fontWeight: '300',
  },
  cartTotalText: {
    fontSize: width * 0.035,
    color: 'white',
    fontWeight: '300',
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
});

export default RestaurantHome;
