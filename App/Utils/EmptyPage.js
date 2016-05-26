var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image,
} = React;

var EmptyPage = React.createClass({
  render() {
    return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'http://pickaface.net/includes/themes/clean/img/slide2.png'
        }}/>
      <Text style={{ position: 'absolute', left: 70, top: 20 }}>Your name</Text>
    </View>
    );
  }
});

var styles = StyleSheet.create({
  avatarContainer: {
    marginBottom: 20,
    marginTop: 70
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
});

module.exports = EmptyPage;