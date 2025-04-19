"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const todo_datasource_impl_1 = require("../../infrastructure/datasource/todo.datasource.impl");
const todo_repository_impl_1 = require("../../infrastructure/repositories/todo.repository.impl");
class TodoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new todo_datasource_impl_1.TodoDatasourceImpl();
        const todoRepository = new todo_repository_impl_1.TodoRepositoryImpl(datasource);
        const todoController = new controller_1.TodosController(todoRepository);
        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);
        return router;
    }
}
exports.TodoRoutes = TodoRoutes;
