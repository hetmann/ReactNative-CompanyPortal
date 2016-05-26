
'use strict';

var React = require('react-native');
var window = require('Dimensions').get('window');
var SimplePage = require('../Utils/SimplePage');
var Main = require('./Main');

var Firebase = require('firebase');
var firebaseUtils = require('../Utils/FirebaseUtils');

var {
  StyleSheet,
  Scrollview,
  View,
  Text,
  TextInput,
  PixelRatio,
  TouchableHighlight,
  TabBarIOS,
  Component
} = React;


var App = React.createClass ({
  statics: {
    attemptedTransition: null
  },

  getInitialState: function(){
    return {
      loggedIn: firebaseUtils.isLoggedIn(),
      email: "",
      password: "",
    }
  },
  handleLogout: function(loggedIn){
    this.setState({
      loggedIn: loggedIn
    });
  },
  componentWillMount: function(){
    firebaseUtils.onChange = this.handleLogout;
  },
  handleSubmit: function(event){
    var email = this.state.email;
    var pw = this.state.password;
    firebaseUtils.loginWithPW({email: email, password: pw}, function(){
      if(App.attemptedTransition){
        var transition = App.attemptedTransition;
        App.attemptedTransition = null;
        transition.retry();
      } else {

      }
    }.bind(this));
  },
  updateEmail: function(event) {
    this.setState({
      email: event.nativeEvent.text,
    });
  },
  updatePass: function(event) {
    this.setState({
      password: event.nativeEvent.text,
    });
  },

  render() {
    var loginOrOut;
    if(this.state.loggedIn){
      loginOrOut = "Logout";
      console.log("LOGIN STATE: ",this.state.loggedIn);
      return (
        <Main />
      );
    } else {
      loginOrOut = "Login";
      console.log("LOGIN STATE: ",this.state.loggedIn);
      return (
        <SimplePage
          noSpacer={true}
          noScroll={false}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Company Portal
            </Text>
            <Text style={styles.intro}>
              Enter your company email and password
            </Text>
            <TextInput
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              keyboardType='default'
              onChange={this.updateEmail}

              clearButtonMode='while-editing'
              placeholder="Email"
              placeholderTextColor="#ffffff"
              style={styles.textBox} />


            <TextInput
              style={styles.textBox}
              clearButtonMode='while-editing'
              password={true}
              onChange={this.updatePass}
              placeholder="Password"
              placeholderTextColor="#ffffff" />

            <TouchableHighlight
              underlayColor="#ACE6E0"
              activeOpacity={0.3}
              onPress={this.handleSubmit}
              style={styles.buttonWrapper}>
              <Text style={styles.button} >
                Login
              </Text>
            </TouchableHighlight>

          </View>
        </SimplePage>
      );
    }


  }
});

var styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  intro: {
    fontSize: 14,
    marginTop: 40,
    marginBottom: 40,
    textAlign: 'center',
    color: '#666666',
    fontFamily: 'HelveticaNeue',
  },
  title: {
    marginTop: window.height * 0.1,
    fontSize: 50,
    color: '#3FCCBE',
    fontFamily: 'HelveticaNeue-Thin',
  },
  textBox: {
    height: 35,
    width: window.width * 0.8,
    alignSelf: 'center',
    borderWidth: 1 / PixelRatio.get(),
    backgroundColor: '#3FCCBE',
    color: '#ffffff',
    borderColor: '#0f0f0f',
    fontSize: 15,
    padding: 4,
    marginBottom: 10,
    fontFamily: 'HelveticaNeue',
  },
  buttonWrapper: {
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#3FCCBE',
    width: window.width * 0.8,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#3FCCBE',
    fontSize: 15,
  },
});

module.exports = App;