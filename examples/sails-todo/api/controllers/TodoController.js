/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getTodos: function(req, res) {
        TodoService.getTodos(function(todos) {
            res.view("homepage", {
                'todos': todos
            });
        });
    },
    getTodo: function(req, res) {
        var todoId = (req.params.id) ? req.params.id : undefined;
        TodoService.getTodo(todoId, function(todo) {
            console.log('todo');
            console.log(todo);
            res.view("edit", {
                'todo': todo
            });
        })
    },
    addTodo: function(req, res) {
        var todoVal = (req.body.content) ? req.body.content : undefined;
        TodoService.addTodo(todoVal, function(success) {
            res.redirect('/');
        });
    },
    editTodo: function(req, res) {
        var todoId = (req.params.id) ? req.params.id : undefined;
        var todoVal = (req.body.content) ? req.body.content : undefined;
        TodoService.editTodo(todoId, todoVal, function(success) {
            res.redirect('/');
        })
    },
    removeTodo: function(req, res) {
        var todoId = (req.params.id) ? req.params.id : undefined;
        TodoService.removeTodo(todoId, function(success) {
            res.redirect('/');
        });
    }
}
