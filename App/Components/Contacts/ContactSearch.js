
var React = require('react-native');
var Styles = require('../../Styles/Main');

var SimplePage = require('../../Utils/SimplePage');
var window = require('Dimensions').get('window');

// Utils components
var Utils = require('../../Utils/Helpers');
var api = require('../../Utils/Api');

var Contact = require('./Contact');
var ContactDetails = require('./ContactDetails');

var {
  View,
  LinkingIOS,
  AlertIOS,
  TextInput,
  ListView,
  NavigatorIOS,
} = React;

class ContactSearch extends React.Component{
  openLink(url) {
    if (url) { 
      LinkingIOS.canOpenURL(url, (supported) => {
        if (!supported) {
          AlertIOS.alert('Can\'t handle this url: ' + url);
        } else {
          LinkingIOS.openURL(url);
        }
      });
    }

    return false;
  }

  constructor(props) {
    super(props);
    
      this.state = {
        contacts: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      searchTerm: "",
    }
  }

  getContacts(searchTerm) {
    if (searchTerm.length === 0) {
      this.setState({
        contacts: this.state.contacts.cloneWithRows([]),
      });
      return;
    }

    api.findContact(searchTerm)
      .then((responseData) => {
        this.setState({
          searchTerm: searchTerm,
          contacts: this.state.contacts.cloneWithRows(responseData),
        });
      })
      .done();
  }

  handleSubmit(event){
    this.getContacts(event.nativeEvent.text)
  }

  render() {
    return (
      

        <SimplePage
          noSpacer={true}
          noScroll={true}>
          <View style={Styles.topView}>
            <TextInput
                placeholder="Search Name or License plate"
                clearButtonMode={'always'}
                returnKeyType='search'
                style={Styles.searchInput}
                value={this.state.searchTerm}
                onSubmitEditing={this.handleSubmit.bind(this)} />
          </View>
          <ListView 
            style={Styles.listing}
            dataSource={this.state.contacts}
            renderRow={
                (contact) => 
                <Contact 
                    profile={contact} 
                    onPress={Utils.navigateMenu.bind(this, contact.lastName + " " + contact.firstName, ContactDetails, {profile: contact} )} /> 
            }
            initialListSize={5}/>
        </SimplePage>

    );
  }
}

module.exports = ContactSearch;
