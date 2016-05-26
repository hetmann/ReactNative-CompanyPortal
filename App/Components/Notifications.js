'use strict';
 
var React = require('react-native');
var Styles = require('../Styles/Main');
var NotificationList = require('./Notifications/NotificationList');

var {
  NavigatorIOS,
  StatusBarIOS,
  Component
} = React;


class Notifications extends Component {
  render() {
    return (
      <NavigatorIOS
        style={Styles.Navigator}
        initialRoute={{
          title: "Notifications",
          component: NotificationList,
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

 
module.exports = Notifications;