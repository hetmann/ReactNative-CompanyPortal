
var React = require('react-native');
var Styles = require('../../Styles/Main');

var {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} = React;


class Call extends React.Component{
  render() {
    var call = this.props.profile;
    var callShortAbout = call.about;
    var isNew = "";
    var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';

    if (call.picture !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      ava = call.picture;
    }

    if ( call.about.length > 38 ) {
      callShortAbout = call.about.substring(0,35) + "...";
    }

    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="#ACE6E0">
        <View style={[styles.callWrapper, call.isActive ? styles['isNew'] : null]}>
          <Image
            source={{uri: ava}}
            style={Styles.thumbnail}/>

            <View style={styles.callInfo}>

              <Text>
                <Text style={styles.bold}>
                  {call.name + " "}
                </Text>
                <Text style={styles.fade}>
                  {"in" + " "}
                </Text>
                <Text style={styles.bold}>
                  {call.company}
                </Text>
              </Text>

              <Text style={[styles.fade, {marginTop: 5, marginBottom: 5,}]}>
                {call.registered}
              </Text>

              <Text style={[styles.bold, {fontSize: 12,}]}>
                {callShortAbout}
              </Text>

            </View>
        </View>
      </TouchableHighlight>
      );
  }
}

var styles = StyleSheet.create({
  callWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  isNew: {
    backgroundColor: '#ACE6E0'
  },
  callInfo: {
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


module.exports = Call;