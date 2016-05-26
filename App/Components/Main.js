/**
 * Company Portal App
 */
'use strict';

var React = require('react-native');
var Contacts = require('./Contacts');
var Notifications = require('./Notifications');
var ChatView = require('./ChatView');
var Settings = require('./Settings');
var Icon = require('Entypo');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
} = React;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Notifications'
    };
  }
  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor="#3FCCBE"
        barTintColor="#3FCCBE">

        <Icon.TabBarItem
          title="Notifications"
          selected={this.state.selectedTab === 'Notifications'}
          iconName="notification"
          onPress={() => {
              this.setState({
                  selectedTab: 'Notifications',
              });
          }}>
            <Notifications/>
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Contacts"
          selected={this.state.selectedTab === 'Contacts'}
          iconName="users"
          onPress={() => {
                this.setState({
                    selectedTab: 'Contacts',
                });
          }}>
          <Contacts/>
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Chat"
          selected={this.state.selectedTab === 'Chat'}
          iconName="chat"
          onPress={() => {
              this.setState({
                  selectedTab: 'Chat',
              });
          }}>
            <ChatView/>
        </Icon.TabBarItem>

        <Icon.TabBarItem
          title="Settings"
          selected={this.state.selectedTab === 'Settings'}
          iconName="sound-mix"
          onPress={() => {
              this.setState({
                  selectedTab: 'Settings',
              });
          }}>
            <Settings/>
        </Icon.TabBarItem>

      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  Navigator: {
    flex: 1,
    backgroundColor: '#DDD',
  },
});

module.exports = Main;