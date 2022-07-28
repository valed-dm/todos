import { FC } from "react";
import { Task } from "./Todos";
import Todo from "./Todo";

type ListProps = {
  todos: Array<Task>;
  setTodoIsDone: (id: string) => void
};

const TodosList: FC<ListProps> = ({ todos, setTodoIsDone }) => {
  const todosList = todos.map((todo, index) => (
    <Todo todo={todo} setTodoIsDone={setTodoIsDone} key={todo.id} />
  ));

  return (
    <div>
      <div className="todos-list">{todosList}</div>
    </div>
  );
};

export default TodosList;
