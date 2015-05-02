describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list', function() {
    expect(ctrl.listDisplay).toBeUndefined();
  });

  describe('when a new task is added', function() {

    var tasks = [
      {
        "task": "Buy some chocolate"
      }
    ]; 

    it('displays the task in the to-do list', function() {
      expect(ctrl.listDisplay.tasks).toEqual(tasks);
    });   
  });
});
