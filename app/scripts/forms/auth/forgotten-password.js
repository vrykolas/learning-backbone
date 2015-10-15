/*global Backbone, JST*/

App.Forms = App.Forms || {};

(function() {
  'use strict';

  App.Forms.AuthForgottenPassword = Backbone.Form.extend({
    schema: {
      email: {
        type: 'Text',
        dataType: 'email',
        title: 'Email',
        validators: [
          'required',
          'email'
        ]
      }
    }
  });
})();
