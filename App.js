import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen, RegisterScreen, WelcomeScreen, DashboardScreen, UserProfileScreen } from './src/screens/index';

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: DashboardScreen,
    UserProfile: UserProfileScreen
  },
  {
    initialRouteName: 'Welcome',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}