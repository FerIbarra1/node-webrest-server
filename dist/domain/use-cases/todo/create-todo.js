"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodo = void 0;
class CreateTodo {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateTodo = CreateTodo;
