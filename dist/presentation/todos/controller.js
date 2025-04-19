"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const dtos_1 = require("../../domain/dtos");
const domain_1 = require("../../domain");
class TodosController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.handleError = (res, error) => {
            if (error instanceof domain_1.CustomError) {
                res.status(error.statusCode).json({ error: error.message });
                return;
            }
            // grabar log
            res.status(500).json({ error: 'Internal server error - check logs' });
        };
        this.getTodos = (req, res) => {
            new domain_1.GetTodos(this.todoRepository)
                .execute()
                .then(todos => res.json(todos))
                .catch(error => this.handleError(res, error));
        };
        this.getTodoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            new domain_1.GetTodo(this.todoRepository)
                .execute(id)
                .then(todo => res.json(todo))
                .catch(error => this.handleError(res, error));
        });
        this.createTodo = (req, res) => {
            const [error, createTodoDto] = dtos_1.CreateTodoDto.create(req.body);
            if (error) {
                res.status(400).json({ error });
                return;
            }
            new domain_1.CreateTodo(this.todoRepository)
                .execute(createTodoDto)
                .then(todo => res.json(todo))
                .catch(error => this.handleError(res, error));
        };
        this.updateTodo = (req, res) => {
            const id = +req.params.id;
            const [error, updateTodoDto] = dtos_1.UpdateTodoDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error) {
                res.status(400).json({ error });
                return;
            }
            new domain_1.UpdateTodo(this.todoRepository)
                .execute(updateTodoDto)
                .then(todo => res.json(todo))
                .catch(error => this.handleError(res, error));
        };
        this.deleteTodo = (req, res) => {
            const id = +req.params.id;
            new domain_1.DeleteTodo(this.todoRepository)
                .execute(id)
                .then(todo => res.json(todo))
                .catch(error => this.handleError(res, error));
        };
    }
}
exports.TodosController = TodosController;
