import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { Todos } from "./types";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState<Todos[]>([]);

  const addTask = (task: string) => {
    const newTodo = {
      id: todos.length + 1,
      task,
    };
    setTodo([...todos, newTodo]);
  };

  const deleteTodo = (id:number) => {
    setTodo(todos.filter(todo=>todo.id !== id))
  };

  return (
    <>
      <TodoForm onAddText={addTask} />
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
