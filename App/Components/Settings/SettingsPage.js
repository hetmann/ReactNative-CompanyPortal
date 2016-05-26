'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  ScrollView,
  NavigatorIOS,
  Component
} = React;
 
class SettingsPage extends Component {
  render() {
    return (
      <ScrollView>
        <Text>
          lorem 
        </Text>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  Navigator: {
    flex: 1,
    backgroundColor: '#DDD',
  },
});

module.exports = SettingsPage;