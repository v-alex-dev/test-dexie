import ITodo from "../model/ITodo";
import database from "../dexie";
import { NoDataFoundError } from "../model/errors/noDataFoundError";

export default class todoRepository {
    public async  add(todo: ITodo): Promise<void>{
        await database.todos.put(todo);
    }

    public async deleteTodo(id: string): Promise<void>{
                
        await database.todos.delete(id);

    }

    public async bulkDelete(ids: string[]): Promise<void>{

        await database.todos.bulkDelete(ids)
    }

    public async setDone(todo: ITodo): Promise<void> {
        await database.todos.update(todo.id, {
            done: !todo.done,
        })
    }

    public async get(id: string): Promise<ITodo> {
        const todo = await database.todos.get(id);
        if(!todo)
            throw new NoDataFoundError("Todo");
        return todo;
    }

    public async getAll(): Promise<ITodo[]> {
        return await database.todos.toArray();
    }


}