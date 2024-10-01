import { Todos } from "../types";
import TodoItem from "./TodoItem";

interface TodoList{
    todos: Todos[]
    deleteTodo : (id:number)=>void;
}

function TodoList ({todos,deleteTodo}:TodoList){
    return(
        <ul className="list-group">
            {todos.map(todo=>(
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    )
}

export default TodoList