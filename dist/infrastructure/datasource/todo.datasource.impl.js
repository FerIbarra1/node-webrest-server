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
exports.TodoDatasourceImpl = void 0;
const postgres_1 = require("../../data/postgres");
const domain_1 = require("../../domain");
class TodoDatasourceImpl {
    create(createTodoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield postgres_1.prisma.todo.create({
                data: createTodoDto
            });
            return domain_1.TodoEntity.fromObject(todo);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield postgres_1.prisma.todo.findMany();
            return todos.map(todo => domain_1.TodoEntity.fromObject(todo));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield postgres_1.prisma.todo.findFirst({
                where: { id }
            });
            if (!todo)
                throw `Todo with id ${id} not found`;
            return domain_1.TodoEntity.fromObject(todo);
        });
    }
    updateById(updateTodoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateTodoDto.id);
            console.log('Valores para update:', updateTodoDto.values);
            const updatedTodo = yield postgres_1.prisma.todo.update({
                where: { id: updateTodoDto.id },
                data: updateTodoDto.values
            });
            return domain_1.TodoEntity.fromObject(updatedTodo);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const deleted = yield postgres_1.prisma.todo.delete({
                where: { id }
            });
            return domain_1.TodoEntity.fromObject(deleted);
        });
    }
}
exports.TodoDatasourceImpl = TodoDatasourceImpl;
