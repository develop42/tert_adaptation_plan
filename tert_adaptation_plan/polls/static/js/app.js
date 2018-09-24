requirejs(['../node_modules/jquery/dist/jquery',
            '../node_modules/ol/ol',
            'map',
            '../node_modules/json2/lib/JSON2/static/json2',
            '../node_modules/underscore/underscore',
            '../node_modules/backbone/backbone-min',
            '../node_modules/backbone.radio/build/backbone.radio',
            '../node_modules/backbone.marionette/lib/backbone.marionette',
            'appView',
            'appModel',
            'appCollection',
            ],

function($, ol, map,
         json,
         underscore,
         backbone,
         radio,
         marionette,
         appView,
         appModel,
         appCollection,
         ){
			$(document).ready(function() {
				var myApplication = new Application();
				myApplication.init();
			});

		  }
);