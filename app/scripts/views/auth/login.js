/*global Backbone, JST*/

App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.AuthLogin = Backbone.View.extend({
    template: JST['app/scripts/templates/auth/login.hbs'],
    events: {
      'click .login': 'login'
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    },
    login: function(event) {
      event.preventDefault();

      var formValues = {
        email: $('.email').val(),
        password: $('.password').val()
      };

    }
  });
})();
