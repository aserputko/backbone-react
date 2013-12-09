/*global define*/
define([
	'backbone',
	'react',
	'jbone'
], function (Backbone, React, $) {
	'use strict';

	/** @jsx react.DOM */
	var HomeView = React.createClass({
		getInitialState: function () {
			this.initialize();
        },

        initialize: function () {
        	console.log('HomeView', 'initialize method was called');
        },

		render: function () {
			return (
				<div>
					<div className="input-group">
						<input type="text" className="form-control" ref="newItem"/>
						<span className="input-group-btn">
							<button className="btn btn-default" type="button" onClick={this.addItem}>Add</button>
						</span>
					</div>
					<div className="items"></div>
				</div>

			)
		},

		addItem: function () {
			console.log(this.refs.newItem.getDOMNode().value.trim())
		}
	});

	return HomeView;
});