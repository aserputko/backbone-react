require.config({
	paths: {
		jbone: '../bower_components/jbone/dist/jbone',
		lodash: '../bower_components/lodash/lodash',
		backbone: '../bower_components/backbone/backbone',
		backboneLocalStarage: '../bower_components/backbone.localStorage/backbone.localStorage',
		react: '../bower_components/react/react',
		JSXTransformer: '../bower_components/react/JSXTransformer',
		jsx: 'vendor/jsx'
	},
	shim: {
		'lodash': {
			exports: '_'
		},
		'backbone': {
			deps: ['lodash', 'jbone'],
			exports: 'Backbone'
		},
		'backboneLocalStarage': {
			deps: ['backbone'],
			exports: 'backboneLocalStarage'
		},
		'react': {
			deps: ['jsx'],
			exports: 'React'
		},
		'JSXTransformer': {
			exports: 'JSXTransformer'
		},
		'jsx': {
			deps: ['JSXTransformer'],
			exports: 'jsx'
		}
	}
});

require(['jsx!controllers/home-controller'], function (HomeControler) {
	'use strict';

	var homeControler = new HomeControler();
});
