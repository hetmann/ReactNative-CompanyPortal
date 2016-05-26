
var React = require('react-native');
var Styles = require('../../Styles/Main');

var {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} = React;


class Notification extends React.Component{
  render() {
    var notification = this.props.profile;
    var notificationShortAbout = notification.about;
    var isNew = "";
    var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';

    if (notification.picture !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      ava = notification.picture;
    }

    if ( notification.about.length > 38 ) {
      notificationShortAbout = notification.about.substring(0,35) + "...";
    }

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="#ACE6E0">
        <View style={[styles.notificationWrapper, notification.isActive ? styles['isNew'] : null]}>
          <Image
            source={{uri: ava}}
            style={Styles.thumbnail}/>

            <View style={styles.notificationInfo}>

              <Text>
                <Text style={styles.bold}>
                  {notification.name + " "}
                </Text>
                <Text style={styles.fade}>
                  {"in" + " "}
                </Text>
                <Text style={styles.bold}>
                  {notification.company}
                </Text>
              </Text>

              <Text style={[styles.fade, {marginTop: 5, marginBottom: 5,}]}>
                {notification.registered}
              </Text>

              <Text style={[styles.bold, {fontSize: 12,}]}>
                {notificationShortAbout}
              </Text>

            </View>
        </View>
      </TouchableHighlight>
      );
  }
}

var styles = StyleSheet.create({
  notificationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  isNew: {
    backgroundColor: '#ACE6E0'
  },
  notificationInfo: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
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


module.exports = Notification;