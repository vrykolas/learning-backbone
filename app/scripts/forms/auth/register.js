/*global Backbone, JST*/

App.Forms = App.Forms || {};

(function() {
  'use strict';

  App.Forms.AuthRegister = Backbone.Form.extend({
    schema: {
      email: {
        type: 'Text',
        dataType: 'email',
        title: 'Email',
        validators: [
          'required',
          'email'
        ]
      },
      password: {
        type: 'Password',
        title: 'Password',
        validators: [
          'required'
        ]
      },
      confirmPassword: {
        type: 'Password',
        title: 'Confirm password',
        validators: [
          'required'
          {
            type: 'match',
            field: 'password',
            message: 'Passwords must match'
          }
        ]
      }
    }
  });
})();
