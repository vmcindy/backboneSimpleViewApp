// Namespace our objectApp
var app = app || {};

// A group (array) of Object models
app.ObjectsCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.singleObject

});