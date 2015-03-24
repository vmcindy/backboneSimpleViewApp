var obj1 = new app.singleObject({
  name: "OBJ1",
  desc: "lorem ipsum - obj1",
  color: "Red",
  link: "obj1"
});

var obj2 = new app.singleObject({
  name: "OBJ2",
  desc: "lorem ipsum - obj2",
  link: "obj2"
});

var obj3 = new app.singleObject({
  name: "OBJ#",
  desc: "lorem ipsum - obj3",
  link: "obj3"
});

var objectGroup = new app.ObjectsCollection([
  obj1, obj2, obj3
]);

var objectGroupView = new app.allObjectsView({ collection: objectGroup});

$("#allObjects").html(objectGroupView.render().el);

var objectRouter = new app.Router();

Backbone.history.start();