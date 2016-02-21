module.exports = {
	getTodos: function(next) {
		Todo.find().exec(function(err, todos) {
			if(err) throw err;
			next(todos);
		});
	},
	getTodo: function(id, next) {
		Todo.find({id: id}).exec(function(err, todo) {
			if(err) throw err;
			next(todo);
		});
	},
	addTodo: function(content, next) {
		Todo.create({content: content}).exec(function(err, todo) {
			if(err) throw err;
			console.log(todo);
			next(todo);
		})
	},
	editTodo: function(id, content, next) {
		Todo.editTodo({id: id}, {content: content}).exec(function(err, todo) {
			if(err) throw err;
			next(todo);
		});
	},
	deleteTodo: function(todo, next) {
		Todo.destroy({id: todo.id}).exec(function(err, todo) {
			if (err) throw err;
			next(todo);
		});
	}
}