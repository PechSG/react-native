import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline">PichSG</Typography>
        </Toolbar>
    </AppBar>