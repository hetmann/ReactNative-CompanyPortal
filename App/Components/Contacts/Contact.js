
var React = require('react-native');
var Styles = require('../../Styles/Main');
var ContactDetails = require('./ContactDetails');

var {
	Text,
	View,
	Image,
	StyleSheet,
	TouchableHighlight,
} = React;


class Contact extends React.Component{
	render() {
		var contact = this.props.profile,
			fullName = contact.lastName + " " + contact.firstName;
		if (!contact.lastName || !contact.firstName) return null;

    if (contact.avatar !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      var ava = contact.avatar
    } else {
      var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
    }

		return (
			<TouchableHighlight  onPress={this.props.onPress} underlayColor="#ACE6E0">
        <View style={styles.notificationWrapper}>
          <Image
            source={{uri: ava}}
            style={[Styles.thumbnail, {marginRight: 10,}]}/>
          <View>

            <Text style={styles.lineRow}>
                {fullName}
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
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  lineRow: {
    lineHeight: 45,
    color: '#929FAA',
  },
});

module.exports = Contact;