

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Header } from '../../organisms/index';

export class RegisterScreen extends Component {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Header screenTitle="Register"></Header>
            <Text>Register</Text>
          </View>
        );
      }

    
}
