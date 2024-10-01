import { Todos } from "../types";

interface TodoItems {
  todo: Todos;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, deleteTodo }: TodoItems) {
  return (
    <>
      <li
        className={
          "list-group-item"
        }
      >
        <div className="d-flex justify-content-between">
            {todo.task}
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
