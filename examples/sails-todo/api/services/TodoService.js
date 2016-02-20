module.exports = {
	getTodos: function(next) {
		Todo.find().exec(function(err, todos) {
			if(err) throw err;
			next(todos);
		});
	},
    getTodo: function(id, next) {
        Todo.find({id:id}).exec(function(err, todo) {
			if(err) throw err;
			next(todo);
        })
    },
	addTodo: function(todoVal, next) {
		Todo.create({content: todoVal}).exec(function(err, todo) {
			if(err) throw err;
			next(todo);
		});
	},
    editTodo: function(id, content, next) {
        Todo.update({id:id},{content:content}).exec(function(err, todo) {
			if(err) throw err;
			next(todo);
        })
    },	
	removeTodo: function(id, next) {
		Todo.destroy({id: id}).exec(function(err, todo) {
			if(err) throw err;
			next(todo);
		});
	}
}