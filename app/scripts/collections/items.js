/*global define*/
define([
	'backbone'
], function (Backbone) {
	'use strict';

	var Items = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('items')
		
	});

	return Items;
});