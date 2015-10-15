/*global Backbone, Backbone*/

App.Routers = App.Routers || {};

(function() {
  'use strict';

  App.Routers.Auth = Backbone.Router.extend({
    routes: {
      'login': 'login',
      'logout': 'logout',
      'register': 'register',
      'forgotten-password': 'forgottenPassword',
      'reset-password': 'resetPassword'
    },
    login: function() {
      var loginForm = new App.Forms.AuthLogin();
      App.showView(loginForm);
    },
    logout: function() {},
    forgottenPassword: function() {
      var forgottenPasswordForm = new App.Forms.AuthForgottenPassword();
      App.showView(forgottenPasswordForm);
    },
    resetPassword: function() {},
    register: function() {
      var registerForm = new App.Forms.AuthRegister();
      App.showView(registerForm);
    }
  });
})();
