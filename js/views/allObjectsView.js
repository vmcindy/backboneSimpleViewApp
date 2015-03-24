// Namespace our ObjectApp
var app = app || {};

app.allObjectsView = Backbone.View.extend({

  tagName: "section",

  render: function() {
 	  this.collection.each(this.addObject, this);
 		return this;
  },

 addObject: function(object) {
 		var objectView = new app.singleObjectView ({ model: object });
 		this.$el.append(objectView.render().el);
 }

});