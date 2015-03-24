// Namespace our objectApp
var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"obj1": "obj1Message",
	"obj2": "obj2Message",
	"obj3": "obj3Message"
},

noCopy: function() {
  $("#copy").html("");
},

obj1Message: function() {
  $("#copy").html("Obj1 message");
},

obj2Message: function() {
  $("#copy").html("Obj2 message");
},

obj3Message: function() {
  $("#copy").html("Obj3 message");
}

});


