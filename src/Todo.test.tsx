import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { mockedTasks } from "./mocks/mockedTasks";

const mockSetTodoIsDone = jest.fn;
const taskFalse = mockedTasks[0];
const taskTrue = mockedTasks[1];

describe("Todo test", () => {
  test("Todo renders checkbox and todo title", () => {
    render(<Todo todo={taskFalse} setTodoIsDone={mockSetTodoIsDone} />);

    const checkbox = screen.getByRole("checkbox");
    const todo = screen.getByText(taskFalse.title);
    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug();

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("id", taskFalse.id);
    expect(checkbox).toHaveAttribute("name", "checkbox - " + taskFalse.title);
    expect(checkbox).not.toBeChecked();
    expect(todo).toBeInTheDocument();
    expect(todo).toHaveAttribute("style", "font-style: bold;");
  });

  test("user can check todo checkbox and gets line-through todo text", () => {
    render(<Todo todo={taskTrue} setTodoIsDone={mockSetTodoIsDone} />);
    const checkbox = screen.getByRole("checkbox");
    const todo = screen.getByText(taskTrue.title);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("id", taskTrue.id);
    expect(checkbox).toHaveAttribute("name", "checkbox - " + taskTrue.title);
    expect(checkbox).toBeChecked();
    expect(todo).toBeInTheDocument();
    expect(todo).toHaveAttribute("style", "text-decoration: line-through;");
  });
});
