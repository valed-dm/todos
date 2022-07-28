import { FC } from "react";
import { Dispatch, SetStateAction } from "react";

interface Footer {
  itemsLeft: number;
  showAll: boolean;
  showActiveCompleted: boolean;
  setShowAll: Dispatch<SetStateAction<boolean>>;
  setShowActiveCompleted: Dispatch<SetStateAction<boolean>>;
  clearCompleted: () => void;
}

const TodosFooter: FC<Footer> = (props) => {
  const handleAll = () => {
    props.setShowAll(true);
  };
  const handleActive = () => {
    props.setShowAll(false);
    props.setShowActiveCompleted(true);
  };
  const handleCompleted = () => {
    props.setShowAll(false);
    props.setShowActiveCompleted(false);
  };
  const handleClearCompleted = () => {
    props.clearCompleted();
  };
  return (
    <div className="todo-footer">
      <div style={{ marginLeft: "5px" }}>
        <span data-testid="items-left">
          {props.itemsLeft ? props.itemsLeft : 0}&nbsp;items left
        </span>
      </div>
      <div className="todo-select">
        <p
          data-testid="all"
          style={
            props.showAll ? { border: "1px solid white" } : { border: "none" }
          }
          onClick={handleAll}
        >
          All
        </p>
        <p
          data-testid="active"
          style={
            props.showActiveCompleted && !props.showAll
              ? { border: "1px solid white" }
              : { border: "none" }
          }
          onClick={handleActive}
        >
          Active
        </p>
        <p
          data-testid="completed"
          style={
            !props.showActiveCompleted && !props.showAll
              ? { border: "1px solid white" }
              : { border: "none" }
          }
          onClick={handleCompleted}
        >
          Completed
        </p>
      </div>
      <div>
        <p data-testid="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </p>
      </div>
    </div>
  );
};

export default TodosFooter;
