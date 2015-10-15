/*global Backbone, JST*/

App.Forms = App.Forms || {};

(function() {
  'use strict';

  App.Forms.AuthLogin = Backbone.Form.extend({
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
      rememberMe: {
        type: 'Checkbox',
        options: [
          {
            label: 'Remember me',
            val: 'rememberMe'
          }
        ]
      }
    }
  });
})();
