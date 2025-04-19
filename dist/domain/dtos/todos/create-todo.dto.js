"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoDto = void 0;
class CreateTodoDto {
    constructor(text) {
        this.text = text;
    }
    static create(props) {
        const { text } = props;
        if (!text)
            return ['Text property is required', undefined];
        return [undefined, new CreateTodoDto(text)];
    }
}
exports.CreateTodoDto = CreateTodoDto;
