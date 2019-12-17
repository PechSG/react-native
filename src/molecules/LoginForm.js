import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
const loginURL = 'http://pichsaving.herokuapp.com/api/login';

export default class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {phoneNumber: '', password: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target
        const name = target.name
        console.log(name)
        this.setState({[name]: event.target.value});
    
    }
  
    handleSubmit(event) {
      alert('A phoneNumber was submitted: ' + this.state.phoneNumber + 'A name was submitted: ' + this.state.password);
      axios.post(loginURL, {
        phoneNumber: this.state.phoneNumber,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.msg)
      })
      .catch(function (error) {
        console.log(error);
      });

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Phone Number:
            <input type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }