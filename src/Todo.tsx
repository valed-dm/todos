import React, { FC } from "react";
import { Task } from "./Todos";

type TodoProps = {
  todo: Task;
  setTodoIsDone: (id: string) => void;
};

const Todo: FC<TodoProps> = ({ todo, setTodoIsDone }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTodoIsDone(id);
  };

  return (
    <div style={{ borderBottom: "1px solid MediumPurple" }}>
      <div className="todos">
        <div>
          <input
            type="checkbox"
            name={"checkbox - " + todo.title}
            value={todo.title}
            id={todo.id}
            data-testid="todo"
            onChange={handleChange}
            checked={todo.isDone}
          />
        </div>
        <div>
          <span
            style={
              todo.isDone
                ? { textDecoration: "line-through" }
                : { fontStyle: "bold" }
            }
          >
            {todo.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
