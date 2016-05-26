var Window = require('Dimensions').get('window');
var utils = {
	navigateMenu(Title, Component, PassProps, rightButtonIcon) {
		console.log(rightButtonIcon);
				
		this.props.navigator.push({
			title: Title || "Select Menu",
			component: Component,
			passProps: PassProps || {},
			rightButtonIcon: rightButtonIcon || null,
		})
	},
    dimensions() { return Window },
}

module.exports = utils;
