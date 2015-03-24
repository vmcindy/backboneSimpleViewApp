// Namespace our objectApp
var app = app || {};

app.singleObjectView = Backbone.View.extend({

  tagName: "article",
  className: "objectListItem",

  template: _.template( $("#objectElement").html() ),

  render: function() {
    var objectTemplate = this.template(this.model.toJSON());
    this.$el.html(objectTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addBgColor',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});