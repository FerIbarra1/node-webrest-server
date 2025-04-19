"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoEntity = void 0;
class TodoEntity {
    constructor(id, text, completedAt) {
        this.id = id;
        this.text = text;
        this.completedAt = completedAt;
    }
    get isCompleted() {
        return !!this.completedAt;
    }
    static fromObject(object) {
        const { id, text, completedAt } = object;
        if (!id)
            throw 'Id is required';
        if (!text)
            throw 'Text is required';
        let newCompletedAt;
        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (isNaN(newCompletedAt.getTime())) {
                throw 'CompletedAt is not a valid date';
            }
        }
        return new TodoEntity(id, text, newCompletedAt);
    }
}
exports.TodoEntity = TodoEntity;
