/**
 * Company Portal App
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');
var Notifications = require('./App/Components/Notifications');
var More = require('./App/Components/More');
var Messages = require('./App/Components/Messages');
var Login = require('./App/Components/Login');
var Icon = require('Ionicons');


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
} = React;

class CompanyPortal extends React.Component{
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
        tintColor="yellow"
        barTintColor="red">
        <Icon.TabBarItem
          title="Notifications"
          selected={this.state.selectedTab === 'Notifications'}
          iconName="ios-home-outline"
          selectedIconName="ios-home"
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
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          onPress={() => {
                this.setState({
                    selectedTab: 'Contacts',
                });
          }}>
            <Main/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="More"
          selected={this.state.selectedTab === 'More'}
          iconName="ios-star-outline"
          selectedIconName="ios-star"
          onPress={() => {
              this.setState({
                  selectedTab: 'More',
              });
          }}>
            <More/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Messages"
          selected={this.state.selectedTab === 'Messages'}
          iconName="ios-gear-outline"
          selectedIconName="ios-gear"
          onPress={() => {
              this.setState({
                  selectedTab: 'Messages',
              });
          }}>
            <Messages/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Login"
          selected={this.state.selectedTab === 'Login'}
          iconName="ios-analytics-outline"
          selectedIconName="ios-analytics"
          onPress={() => {
              this.setState({
                  selectedTab: 'Login',
              });
          }}>
            <Login/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }

};

AppRegistry.registerComponent('CompanyPortal', () => CompanyPortal);
