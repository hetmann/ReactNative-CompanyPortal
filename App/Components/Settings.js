'use strict';
 
var React = require('react-native');
var SettingsPage = require('./Settings/SettingsPage');
var {
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS,
  Component
} = React;
 
class SettingsView extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.Navigator}
        initialRoute={{
          title: "Settings",
          component: SettingsPage,
          rightButtonTitle: 'Logout',
            onRightButtonPress: () => {
              this.handleLogout;
            },
        }}

        tintColor="#FFFFFF"
        barTintColor="#3FCCBE"
        titleTextColor="#FFFFFF" />
    );
  }
}

var styles = StyleSheet.create({
  Navigator: {
    flex: 1,
    backgroundColor: '#DDD',
  },
});

module.exports = SettingsView;