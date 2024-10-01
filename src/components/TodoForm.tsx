import { useState } from "react";

interface TodoForms {
  onAddText: (task: string) => void;
}

function TodoForm({ onAddText }: TodoForms) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddText(task);
      setTask("");
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new Task"
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
