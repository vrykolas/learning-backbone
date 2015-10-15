/*global Backbone, Backbone*/

App.Routers = App.Routers || {};

(function() {
  'use strict';

  App.Routers.Auth = Backbone.Router.extend({
    routes: {
      'login': 'login',
      'logout': 'logout',
      'forgotten-password': 'forgottenPassword',
      'reset-password': 'resetPassword'
    },
    login: function() {},
    logout: function() {},
    forgottenPassword: function() {},
    resetPassword: function() {}
  });

})();
