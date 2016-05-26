/**
 * CompanyPortal App
 */
'use strict';

var React = require('react-native');
var App = require('./App/Components/App');


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
} = React;

class CompanyPortal extends React.Component{
  render() {
    return (
      <App />
    );
  }

};

AppRegistry.registerComponent('CompanyPortal', () => CompanyPortal);
