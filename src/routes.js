import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import Home from './home';
import Favoritos from './favoritos';

const {width} = Dimensions.get('window');
const barHeight = 70;

const styles = StyleSheet.create({
  iconContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  text: color => ({
    width: width * 0.5,
    textAlign: 'center',
    color,
  }),
});

const getTabIcon = (icon, color, name, focus) => (
  <View style={styles.iconContent}>
    <Icons name={icon} size={24} color={color} />
    {focus && <Text style={styles.text(color)}>{name}</Text>}
  </View>
);

const Routes = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      HOME: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: ({focused, tintColor}) =>
            getTabIcon('ios-home', tintColor, 'Home', focused),
        },
      },
      FAVORITOS: {
        screen: Favoritos,
        navigationOptions: {
          tabBarIcon: ({focused, tintColor}) =>
            getTabIcon('ios-star-half', tintColor, 'Favoritos', focused),
        },
      },
    },
    {
      barStyle: {
        backgroundColor: '#EEEEEE',
        height: barHeight,
        justifyContent: 'flex-end',
        padding: 0,
        width: '100%',
      },
      keyboardHidesNavigationBar: true,
      sceneAnimationEnabled: true,
      labeled: false,
      activeColor: '#00695C',
    },
  ),
);

export default Routes;
