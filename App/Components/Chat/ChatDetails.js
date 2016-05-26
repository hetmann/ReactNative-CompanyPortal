
var React = require('react-native');
var Styles = require('../../Styles/Main');
var window = require('Dimensions').get('window');
var map = require ('lodash/collection/map');

var {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} = React;


class ChatDetails extends React.Component{

  constructor(props) {
    super(props);

      this.state = {
        MessageData : {},
    }
  }

  componentWillMount() {
    var self = this;
    self.setState({
        MessageData: this.props.messages || {}
      });

  }

  renderMessages() {
    var messages = {};

    if (this.state.MessageData) {

      messages = map(this.state.MessageData.marian, function(msg, key) {
        var theMessage = msg["message"];
        var theUser =  msg["user"]["username"];
        return (
          <View key={key} style={[
                  styles.messageContainer,
                  msg["user"]["isReceived"] === true ? styles.isReceived : null,
                  theUser === "diana" ? styles.myMessage : styles.othersMessage,
                  msg["user"]["isRead"] === false ? styles.unRead : null ]}>
            <Text style={[
              styles.message,


              ]}>{theMessage}</Text>
          </View>
        )
      });
    }

    return messages;
  }

  render() {
    var messages = this.state.MessageData.marian;
    var chat = this.props.profile;
    var chatShortAbout = chat.about;
    var chatConversation = "";
    var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
    if (chat.picture !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      ava = chat.picture;
    }

    if ( chat.about.length > 38 ) {
      chatShortAbout = chat.about.substring(0,35) + "...";
    }


    return (
      <ScrollView>
        <View style={styles.messages}>
          {this.renderMessages()}
        </View>
      </ScrollView>

      );
  }
}

var styles = StyleSheet.create({
  messages: {
    flexDirection: 'column',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  bold: {
    color: '#606060',
  },
  fade: {
    color: '#929FAA',
    lineHeight: 23,
    fontFamily: 'Helvetica',
  },
  messageContainer: {
    marginBottom: 15,
    alignSelf: "flex-start",
    padding: 5,
    borderWidth: 1,
    borderColor: '#3FCCBE',
    backgroundColor: 'white',
  },
  message: {
    color: '#929FAA',
    fontFamily: 'Helvetica',

  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#E2F3F2",
  },
  othersMessage: {
    backgroundColor: 'white',
  },
  unRead: {
    backgroundColor: "#F2F2F2",
  },
});

module.exports = ChatDetails;