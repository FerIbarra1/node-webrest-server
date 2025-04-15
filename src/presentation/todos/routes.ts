import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {

    static get routes(): Router {
        const router = Router();
        const todoController = new TodosController();

        router.get('/', todoController.getTodos.bind(todoController));
        router.get('/:id', todoController.getTodoById);

        router.post('/', todoController.createTodo);
        router.post('/id', todoController.updateTodo);
        router.delete('/:id', todoController.deleteTodo);


        return router;
    }

}