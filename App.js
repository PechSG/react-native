import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

<<<<<<< Updated upstream
import { LoginScreen, RegisterScreen, WelcomeScreen, DashboardScreen, UserProfileScreen } from './src/screens/index';
=======
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ clear: 'both' }}>Home Screen</Text>
        <br />
        <TouchableOpacity
         style={{ width: 200, height: 150, float: 'left',
         alignItems: 'center',
         backgroundColor: '#DDDDDD',
         padding: 10}}
         onPress={() => this.props.navigation.navigate('Details')}
        >
         <Text> Touch Here </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={{ width: 200, height: 150, float: 'left',
         alignItems: 'center',
         backgroundColor: '#DDDDDD',
         padding: 10}}
         onPress={() => this.props.navigation.navigate('Details')}
        >
         <Text> Touch Here </Text>
       </TouchableOpacity>
        <br />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
>>>>>>> Stashed changes

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