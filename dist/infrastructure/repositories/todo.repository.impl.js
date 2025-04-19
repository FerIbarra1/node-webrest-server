"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepositoryImpl = void 0;
class TodoRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createTodoDto) {
        return this.datasource.create(createTodoDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateTodoDto) {
        return this.datasource.updateById(updateTodoDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.TodoRepositoryImpl = TodoRepositoryImpl;
