/*global Backbone, $*/

// add default close method for views and childviews
Backbone.View.prototype.close = function() {
  if(this.childViews) {
    this.childViews.forEach(function(childView) {
      childView.close();
    });
  }

  this.remove();
  this.off();

  if(this.onClose) {
    this.onClose();
  }
};

window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  currentView: null,
  showView: function(view) {
    if(this.currentView) {
      this.currentView.close();
    }

    this.currentView = view;
    this.currentView.render();

    $('.content').append(this.currentView.el);
  },
  init: function() {
    var router = new App.Routers.Auth();
    // Start history
    Backbone.history.start({
      pushState: true,
      root: '/'
    });

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
