'use strict';
 
var React = require('react-native');
var ChatList = require('./Chat/ChatList');
var {
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
  StatusBarIOS,
  Component
} = React;
 
class ChatView extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.Navigator}
        initialRoute={{
          title: "Messages",
          component: ChatList,
          rightButtonTitle: 'New Message',
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
  Navigator: {
    flex: 1,
    backgroundColor: '#DDD',
  },
});

module.exports = ChatView;