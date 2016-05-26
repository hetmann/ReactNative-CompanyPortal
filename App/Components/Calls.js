	
'use strict';
 
var React = require('react-native');
var Styles = require('../Styles/Main');
var CallList = require('./Calls/CallList');
var window = require('Dimensions').get('window');
var {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  StatusBarIOS,
  Component
} = React;
 

 
class Calls extends Component {
  render() {
    return (
      <NavigatorIOS
        style={Styles.Navigator}
        initialRoute={{
          title: "Calls",
          component: CallList,
          rightButtonTitle: 'Edit',
          onRightButtonPress: () => {
            StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
          },
        }}
        tintColor="#FFFFFF"
        barTintColor="#3FCCBE"
        titleTextColor="#FFFFFF" />
    );
  }
}

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'TeluguSangamMN',
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#c1b274',
  }
});
 
module.exports = Calls;