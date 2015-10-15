/*global Backbone, Backbone*/

App.Models = App.Models || {};

(function() {
  'use strict';

  App.Models.Auth = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function() {
    },

    parse: function(response) {
      return response;
    }
  });

})();
