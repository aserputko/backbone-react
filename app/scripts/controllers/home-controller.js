/*global define*/
define([
	'backbone',
	'react',
	'jbone',
	'jsx!views/home-view'
], function (Backbone, React, $, homeView) {
	'use strict';
	/** @jsx react.DOM */
	var HomeController = Backbone.Router.extend({
		initialize: function () {
			this.el = $("#application").get(0);
			this.render();
		},

		render: function () {
			var view = React.renderComponent(
				<homeView/>,
				this.el
			)
		}
	});

	return HomeController;
});