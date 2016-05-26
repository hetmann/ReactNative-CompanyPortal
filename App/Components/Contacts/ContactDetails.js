
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


class Profile extends React.Component{

	render() {
		var contact = this.props.profile,
			  fullName = contact.lastName + " " + contact.firstName;

    if (contact.avatar !== 'http://company.portal.url:80/image/user_portreit?img_id=0') {
      var ava = contact.avatar
    } else {
      var ava = 'http://www.celebuzz.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
    }


		return (
			<ScrollView style={Styles.profile}>
				<View style={Styles.profileImageHolder}>
					<Image
						source={{uri: ava}}
						style={Styles.profileImage}/>
				</View>

        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
          {contact.phones.map((p) => {
            return (
              <TouchableOpacity onPress={() => Communications.phonecall(p.replace(/\D/g,''), true)}>
                <View >
                  <Text style={Styles.button}>Call</Text>
                </View>
              </TouchableOpacity>
              );
            })
          }

          {contact.phones.map((p) => {
            return (
              <TouchableOpacity onPress={() => Communications.text(p.replace(/\D/g,''))}>
                <View >
                  <Text style={Styles.button}>Message</Text>
                </View>
              </TouchableOpacity>
              );
            })
          }

          <TouchableOpacity onPress={() => Communications.email([contact.email],null,null,'Hello','My body text')}>
            <View >
              <Text style={Styles.button}>Email</Text>
            </View>
          </TouchableOpacity>
        </View>
				<View>


          <Text style={Styles.title}>
            Name: {fullName}
          </Text>

					<Text style={Styles.title}>
						Skype: {contact.skype}
					</Text>

          <Text style={Styles.title}>
            License Plate: {contact.licensePlate}
          </Text>

          <Text style={Styles.title}>
            Building: {contact.building}
          </Text>

          <Text style={Styles.title}>
            Department/s: {contact.department}
          </Text>


				</View>
			</ScrollView>
	    );
	}
}

module.exports = Profile;