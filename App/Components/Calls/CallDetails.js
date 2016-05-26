
var React = require('react-native');
var Styles = require('../../Styles/Main');
var Communications = require('react-native-communications');

var {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} = React;


class CallDetails extends React.Component{

  render() {
    var notification = this.props.profile;
    var notificationShortAbout = notification.about;
    var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
    if (notification.picture !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      ava = notification.picture;
    }

    if ( notification.about.length > 38 ) {
      notificationShortAbout = notification.about.substring(0,35) + "...";
    }


    return (
      <ScrollView>
        <View style={styles.notificationWrapper}>
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

            <Text style={[styles.fade]}>
              {notification.registered}
            </Text>

            <Text style={[styles.bold, {fontSize: 12, paddingTop: 5,}]}>
              {notificationShortAbout}
            </Text>

          </View>
        </View>
        <View>
          <Text style={[styles.fade, {padding: 10,}]}>
            {notification.about}
          </Text>
        </View>
      </ScrollView>

      );
  }
}

var styles = StyleSheet.create({
  notificationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    lineHeight: 23,
    fontFamily: 'Helvetica',
  },
});

module.exports = CallDetails;