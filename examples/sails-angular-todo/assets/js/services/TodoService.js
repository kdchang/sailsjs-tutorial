todoApp.service('TodoService', function($http, $q) {
  return {
    'getTodos': function() {
      var defer = $q.defer();
      $http.get('/todo/getTodos').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'getTodo': function(todo) {
    	var defer = $q.defer();
    	$http.get('/todo/getTodo/' + todo.id ).success(function(resp) {
    		defer.resolve(resp);
    	}).error(function(err) {
    		defer.reject(err);
    	});
    	return defer.promise;
    },
    'addTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/addTodo', todo).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'deleteTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/deleteTodo', {todo:todo}).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});
  