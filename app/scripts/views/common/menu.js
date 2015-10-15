/*global Backbone, Backbone, JST*/

Backbone.Views = Backbone.Views || {};

(function() {
  'use strict';

  Backbone.Views.CommonMenu = Backbone.View.extend({
    template: JST['app/scripts/templates/common/menu.hbs'],
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
