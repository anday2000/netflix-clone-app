import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

const screens = {
  Home: {
    screen: Home
  },
  MovieDetails: {
    screen: MovieDetails
  }
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);