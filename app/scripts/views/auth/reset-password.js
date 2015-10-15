/*global Backbone, JST*/

App.Views = App.Views || {};

(function() {
  'use strict';

  App.Views.AuthResetPassword = Backbone.View.extend({

    template: JST['app/scripts/templates/auth/reset-password.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
