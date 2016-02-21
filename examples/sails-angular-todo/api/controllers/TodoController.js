/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `TodoController.getTodos()`
     */
    getTodos: function(req, res) {
        TodoService.getTodos(function(todos) {
            res.json({
                todos: todos
            })
        });
    },

    /**
     * `TodoController.getTodo()`
     */
    getTodo: function(req, res) {
        var id = req.params.id;
        TodoService.getTodo(id, function(todo) {
            res.json({
                todo: todo
            })
        });
    },

    /**
     * `TodoController.addTodo()`
     */
    addTodo: function(req, res) {
        var content = req.body.content;
        TodoService.addTodo(content, function(success) {
            res.json(success);
        });
    },


    /**
     * `TodoController.editTodo()`
     */
    editTodo: function(req, res) {
        var id = req.params.id;
        TodoService.addTodo(content, function(success) {
            res.json(success);
        });
    },


    /**
     * `TodoController.deleteTodo()`
     */
    deleteTodo: function(req, res) {
        var todo = req.body.todo;
        TodoService.deleteTodo(todo, function(success) {
            res.json(success);
        });
    }
};
