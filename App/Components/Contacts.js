'use strict';

var React = require('react-native');
var Styles = require('../Styles/Main');
var window = require('Dimensions').get('window');
var ContactSearch = require('./Contacts/ContactSearch');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  NavigatorIOS,
} = React;




var Search = React.createClass({
  render: function() {
    return (
      
        <NavigatorIOS
          style={Styles.Navigator}
          initialRoute={{
            title: "Contacts",
            component: ContactSearch 
          }}
          tintColor="#FFFFFF"
          barTintColor="#3FCCBE"
          titleTextColor="#FFFFFF" />
        
    );
  }
});

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20
  },
  button: {
    position: 'absolute',
    bottom: 35,
    right: 10,
    borderRadius: 20,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

module.exports = Search;