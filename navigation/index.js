import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddressEntry from '../screens/AddressEntry';
import Cart from '../screens/Cart';
import Coupons from '../screens/Coupons';
import CreateProfile from '../screens/CreateProfile';
import Filters from '../screens/Filters';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Login from '../screens/Login';
import OrderHistory from '../screens/OrderHistory'
import Payments from '../screens/Payments';
import PhoneVerification from '../screens/PhoneVerification';
import Profile from '../screens/Profile';
import SearchCategories from '../screens/SearchCategories';
import SignUp from '../screens/SignUp';
import Sort from '../screens/Sort';
import RestaurantHome from '../screens/RestaurantHome';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const firstInstall = true;
const loggedIn = true;

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PhoneVerification"
        component={PhoneVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressEntry"
        component={AddressEntry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppHome"
        component={MainTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Coupons"
        component={Coupons}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RestaurantHome"
        component={RestaurantHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function RootStack() {
  if (firstInstall) {
    return (
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else if (loggedIn === false) {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="Login"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="AppHome"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="AppHome"
          component={MainTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SearchCategories') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'CartStack') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#457B9D',
        inactiveTintColor: 'gray',
        showLabel: false,
        adaptive: true,
        style: {
          backgroundColor: '#F1FAEE',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
        },
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="SearchCategories" component={SearchCategories} />
      <Tab.Screen name="CartStack" component={CartStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default RootStack;
