
var React = require('react-native');
var Styles = require('../../Styles/Main');
var Utils = require('../../Utils/Helpers');
var SimplePage = require('../../Utils/SimplePage');
var NotifData = require('./MockData');
var Notification = require('./Notification');
var NotificationDetails = require('./NotificationDetails');

var window = require('Dimensions').get('window');


var {
  View,
  LinkingIOS,
  AlertIOS,
  TextInput,
  ListView,
  NavigatorIOS,
} = React;

class NotificationList extends React.Component{
  constructor(props) {
    super(props);

      this.state = {
        notifications: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
    }
  }

  
  render() {
    return (
      
        <SimplePage
          noSpacer={true}
          noScroll={true}>
          <ListView 
            style={Styles.listing}
            dataSource={this.state.notifications.cloneWithRows(NotifData)}
            renderRow={
                (notification) => 
                <Notification 
                    profile={notification} 
                    onPress={Utils.navigateMenu.bind(this, notification.greeting, NotificationDetails, {profile: notification} )} /> 
            }
            initialListSize={5}/>
        </SimplePage>

    );
  }
}

module.exports = NotificationList;
