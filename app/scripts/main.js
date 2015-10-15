/*global Backbone, $*/

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    var router = new App.Routers.Auth();
    // Start history
    Backbone.history.start();

    // Catch all clicks and route them using Backbone.history.navigate
    $(document).on('click', 'a:not([data-bypass])', function(event) {
      var href = $(this).attr('href');
      var protocol = this.protocol + '//';

      // Ensure the protocol is not part of URL, meaning its relative.
      if (href && href.slice(0, protocol.length) !== protocol && href.indexOf('javascript:') !== 0) {
        event.preventDefault();
        Backbone.history.navigate(href, true);
      }
    });

    router.navigate('login', true);
  }
};

$(document).ready(function() {
  'use strict';
  App.init();
});
