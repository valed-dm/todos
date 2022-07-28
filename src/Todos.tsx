import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";

export interface Task {
  id: string;
  title: string;
  description?: string;
  isDone: boolean;
}

const Todos: FC = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [showAll, setShowAll] = useState(true);
  const [showActiveCompleted, setShowActiveCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTasks: Array<Task> = [
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        description: "no description",
        isDone: false,
      },
    ];
    if (title) {
      setTasks(newTasks);
    }
    setTitle("");
  };

  const todosLeft = tasks.filter((todo) => !todo.isDone);
  const todosCompleted = tasks.filter((todo) => todo.isDone);
  const clearCompleted = () => {
    setTasks(todosLeft);
  };
  const setTodoIsDone = (id: string) => {
    const index = tasks.findIndex((todo) => todo.id === id);
    const todoChecked = tasks.filter((todo) => todo.id === id);
    todoChecked[0].isDone = !todoChecked[0].isDone;
    const newTasks: Array<Task> = [...tasks];
    newTasks[index] = todoChecked[0];
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="todo-container">
        <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
          <input
            data-testid="todo-input"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            placeholder="What needs to be done?"
            type="text"
            value={title}
          />
        </form>
        <TodosList
          todos={
            showAll ? tasks : showActiveCompleted ? todosLeft : todosCompleted
          }
          setTodoIsDone={setTodoIsDone}
        />
        <TodosFooter
          itemsLeft={todosLeft.length}
          showAll={showAll}
          showActiveCompleted={showActiveCompleted}
          setShowAll={setShowAll}
          setShowActiveCompleted={setShowActiveCompleted}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default Todos;
