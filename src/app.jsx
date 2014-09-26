"use strict";

var React = require('react'),
	orgUnit = require('d2l-orgunit');

var Welcome = React.createClass({
	render: function() {
		return <div>
			<div>Hello {this.props.firstName} {this.props.lastName}!</div>
			<div>Welcome to org-unit <b>{orgUnit.OrgUnitId}</b>.</div>
			<img src="/d2l/lp/ouHome/defaultHome.d2l" />
		</div>;
	}
});

module.exports = function(node) {
	React.renderComponent(
		<Welcome firstName="Marie" lastName="Curie"/>,
		node
	);
};