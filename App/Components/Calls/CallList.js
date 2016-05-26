
var React = require('react-native');
var Styles = require('../../Styles/Main');
var Utils = require('../../Utils/Helpers');
var SimplePage = require('../../Utils/SimplePage');
var CallData = require('../Notifications/MockData');
var Call = require('./Call');
var CallDetails = require('./CallDetails');

var window = require('Dimensions').get('window');


var {
  View,
  LinkingIOS,
  AlertIOS,
  TextInput,
  ListView,
  NavigatorIOS,
} = React;

class CallList extends React.Component{
  constructor(props) {
    super(props);

      this.state = {
        calls: new ListView.DataSource({
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
            dataSource={this.state.calls.cloneWithRows(CallData)}
            renderRow={
                (call) => 
                <Call 
                    profile={call} 
                    onPress={Utils.navigateMenu.bind(this, call.greeting, CallDetails, {profile: call} )} /> 
            }
            initialListSize={5}/>
        </SimplePage>

    );
  }
}

module.exports = CallList;
