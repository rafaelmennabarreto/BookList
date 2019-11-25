import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import Home from './home';
import Favoritos from './favoritos';

const getTabIcon = (focused, icon, text) => (
  <Icons name={icon} size={24}>
    {console.log(focused ? text + 'foi' : 'nao  foi')}
  </Icons>
);

const Routes = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      HOME: {
        screen: Home,
        navigationOptions: {
          title: 'Search',
          tabBarIcon: ({focused}) => getTabIcon(focused, 'ios-home', 'home'),
        },
      },
      FAVORITOS: {
        screen: Favoritos,
        navigationOptions: {
          tabBarIcon: ({focused}) => getTabIcon(focused, 'ios-star-half'),
        },
      },
    },
    {
      barStyle: {backgroundColor: '#BDBDBD'},
    },
  ),
);

export default Routes;
