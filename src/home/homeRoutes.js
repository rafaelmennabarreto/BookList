import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './main';
import BookView from './bookView';

const Routes = createStackNavigator(
  {
    MAIN: {screen: Main, navigationOptions: {header: null}},
    BOOK: {screen: BookView, navigationOptions: {title: ' Livro '}},
  },
  {
    initialRouteName: 'MAIN',
  },
);

export default Routes;
