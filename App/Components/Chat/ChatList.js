
var React = require('react-native');
var Styles = require('../../Styles/Main');
var Utils = require('../../Utils/Helpers');
var SimplePage = require('../../Utils/SimplePage');
var Chat = require('./Chat');
var ChatDetails = require('./ChatDetails');
var Firebase = require('firebase');
var window = require('Dimensions').get('window');

var theData = new Firebase('https://_fire_db_.firebaseio.com');

var {
  View,
  LinkingIOS,
  AlertIOS,
  TextInput,
  ListView,
  NavigatorIOS,
} = React;

class ChatList extends React.Component{
  constructor(props) {
    super(props);

      this.state = {
        ChatData : {},
        MessageData : {},
        notifications: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
    }
  }

  componentWillMount() {
    var self = this;

    theData.once("value", function(snapshot) {
      self.setState({
        ChatData: snapshot.val().notifications,
        MessageData: snapshot.val().messages
      });
    }, function (errorObject) {
      ///
    });

  }

  render() {
    var self = this;
    return (

      <SimplePage
        noSpacer={true}
        noScroll={true}>
        <ListView
          style={Styles.listing}
          dataSource={this.state.notifications.cloneWithRows(this.state.ChatData)}
          renderRow={
              (chat) =>
              <Chat
                  profile={chat}
                  onPress={Utils.navigateMenu.bind(this, chat.name, ChatDetails, {profile: chat, messages: self.state.MessageData} )}
                  hidesBottomBarWhenPushed = {true}  />
          }
          initialListSize={5}/>
      </SimplePage>

    );
  }
}

module.exports = ChatList;
