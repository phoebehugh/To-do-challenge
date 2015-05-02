toDoList.controller('ToDoListController', ['$resource', function($resource) {
  var self = this;

  self.doAddTask = function() {
    self.listDisplay = {
      "tasks": [ 
        {
          "task": "Buy some chocolate"
        }
      ]
    }
  };

}]);
