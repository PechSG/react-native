import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Group from './Group'

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" align="center">Home</Typography>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
            >
            <IconButton
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
