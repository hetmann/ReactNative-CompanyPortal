
var React = require('react-native');

var {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} = React;


class Chat extends React.Component{
  render() {
    var messages = this.props.messages;
    var chat = this.props.profile;
    var chatShortAbout = chat.about;
    var isNew = "";
    var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
    var to = "to";

    if (chat.picture !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      ava = chat.picture;
    }

    if ( chat.about.length > 38 ) {
      chatShortAbout = chat.about.substring(0,35) + "...";
    }
    if (chat.chat_to !== "You") {
      to = "in";
    }

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="#ACE6E0">
        <View style={[styles.chatWrapper, chat.isActive ? styles['isNew'] : null]}>
          <Image
            source={{uri: ava}}
            style={styles.thumbnail}/>

            <View style={[styles.chatInfo, chat.online ? styles['online'] : null]}>

              <Text>
                <Text style={styles.bold}>
                  {chat.name + " "}
                </Text>
                <Text style={styles.fade}>
                  {to + " "}
                </Text>
                <Text style={styles.bold}>
                  {chat.chat_to}
                </Text>
              </Text>

              <Text style={[styles.fade, {marginTop: 5, marginBottom: 5,}]}>
                {chat.registered}
              </Text>

              <Text style={[styles.bold, {fontSize: 12,}]}>
                {chatShortAbout}
              </Text>

            </View>
        </View>
      </TouchableHighlight>
      );
  }
}

var styles = StyleSheet.create({
  chatWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  isNew: {
    backgroundColor: '#ACE6E0'
  },
  chatInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
  },
  online: {
    borderLeftColor: "#3FCCBE",
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
  },
});


module.exports = Chat;