import Dexie, {Table} from "dexie";
import ITodo from "./model/ITodo";

class DexieDatabase extends Dexie {
    public todos: Table<ITodo, string>;
    
    constructor(){
        super("ExerciceTodo") // super() va chercher la DB
        
        this.version(1)  // Version() est propre indexDb.
            .stores({
                todos: "id",
                exemplete: "id, foreignKey"
            });
        
        this.todos = this.table('todos');
    };
}

const database = new DexieDatabase();

export default database;