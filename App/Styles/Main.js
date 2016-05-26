var React = require("react-native");
var window = require('Dimensions').get('window');
var utils = require('../Utils/Helpers');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    marginTop: 60,
  },
  
  topView: {
    backgroundColor: '#f7f7f7',
    paddingTop: 60,
  },
  
  Navigator: {
    flex: 1,
    backgroundColor: '#DDD',
  },

  searchInput: {
    height: 50,
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    color: '#346699',
  },
  
  listing: {
    backgroundColor: '#f7f7f7',
  },

  contactTouch: {
    flex: 1,
  },

  contactWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'stretch',
    margin: 0,
    borderTopWidth: 1,
    borderColor: '#999999',
  },

  profile: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f7f7f7',
  },
  
  listName: {
    alignSelf: 'center',
    fontFamily: 'Verdana',
  },

  title: {
    marginBottom: 15,
    color: '#666666',
    fontFamily: 'HelveticaNeue',
  },

  button: {
    marginBottom: 30,
    marginTop: 20,
    color: '#333333',
    fontFamily: 'GillSans',
  },

  profileImage: {
    width: window.width,
    height: 400,
    alignSelf: 'center',
  },
  profileImageHolder: {
    marginBottom: 10,
    shadowOffset: {width:2, height:2},
    shadowColor: '#666666',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  thumbnail: {
    width: 80,
    height: 80,
  },
});

module.exports = styles;
