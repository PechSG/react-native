import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Header from './src/components/layouts/Header'
import NavBar from './src/components/layouts/NavBar'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Fragment style={styles.container}>
        <Header />
        <NavBar />
      </Fragment>
    );
  }
}

