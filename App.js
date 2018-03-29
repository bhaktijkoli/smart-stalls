import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';

import LoginScreen from './app/components/Login/Login'
import ConnectScreen from './app/components/Connect/Connect'
import HomeScreen from './app/components/Home/Home'
import RegisterScreen from './app/components/Home/Register'

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <RootStack />
      </Root>
    );
  }
}

const RootStack = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Connect: {
    screen: ConnectScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
});
