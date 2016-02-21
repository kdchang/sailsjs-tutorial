'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap']);
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/todo.html',
      controller: 'TodoCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }]);

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.formData = {};
  $scope.todos = [];

  TodoService.getTodos().then(function(response) {
    $scope.todos = response.todos;
  });

  $scope.addTodo = function() {
    TodoService.addTodo($scope.formData).then(function(response) {
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.getTodo = function(todo) {
  	TodoService.getTodo(todo).then(function(response) {
  		$scope.todo = response.todo[0];
  	});
  }

  $scope.deleteTodo = function(todo) {
    TodoService.deleteTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    });
  }
}]);