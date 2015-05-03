toDoList.controller('ToDoListController', function($scope) {

  $scope.listDisplay = [];

    $scope.addTask = function() {
      $scope.listDisplay.push({task : $scope.newTask, isComplete : false });
    };      

      "tasks": [ 
        {
          "task": "Buy some chocolate"
        }
      ]
    }
  };

}]);
