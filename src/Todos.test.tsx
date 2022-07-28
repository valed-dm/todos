import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todos from "./Todos";
import { mockedTasks } from "./mocks/mockedTasks";

describe("Todos test", () => {
  test("it successfully renders", () => {
    render(<Todos />);
    const textInput = screen.getByRole("textbox");
    const itemsLeft = screen.getByTestId("items-left");

    expect(textInput).toBeInTheDocument();
    expect(textInput).toHaveAttribute("placeholder", "What needs to be done?");
    expect(itemsLeft).toHaveTextContent("0 items left");
  });

  test("it accepts given tasks", async () => {
    render(<Todos />);
    const inputEl = screen.getByTestId("todo-input");
    const itemsLeft = screen.getByTestId("items-left");

    await userEvent.type(inputEl, mockedTasks[0].title);
    expect(screen.getByTestId("todo-input")).toHaveValue(mockedTasks[0].title);
    fireEvent.submit(inputEl);
    await userEvent.type(inputEl, mockedTasks[1].title);
    expect(screen.getByTestId("todo-input")).toHaveValue(mockedTasks[1].title);
    fireEvent.submit(inputEl);
    await userEvent.type(inputEl, mockedTasks[2].title);
    expect(screen.getByTestId("todo-input")).toHaveValue(mockedTasks[2].title);
    fireEvent.submit(inputEl);

    const todos = screen.getAllByRole("checkbox");
    const todoFirst = screen.getByText(mockedTasks[0].title);
    const todoSecond = screen.getByText(mockedTasks[1].title);
    const todoThird = screen.getByText(mockedTasks[2].title);

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("placeholder", "What needs to be done?");
    expect(todos).toHaveLength(3);
    expect(todoFirst).toHaveTextContent(mockedTasks[0].title);
    expect(todoSecond).toHaveTextContent(mockedTasks[1].title);
    expect(todoThird).toHaveTextContent(mockedTasks[2].title);
    expect(itemsLeft).toHaveTextContent("3 items left");
  });

  test("All, Active, Completed view modes operate properly", async () => {
    render(<Todos />);
    const inputEl = screen.getByTestId("todo-input");

    await userEvent.type(inputEl, mockedTasks[0].title);
    fireEvent.submit(inputEl);
    await userEvent.type(inputEl, mockedTasks[1].title);
    fireEvent.submit(inputEl);
    await userEvent.type(inputEl, mockedTasks[2].title);
    fireEvent.submit(inputEl);
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);

    await userEvent.click(screen.getByTestId("completed"));
    expect(screen.queryAllByRole("checkbox")).toHaveLength(0);
    fireEvent.click(screen.getByTestId("all"));
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
    fireEvent.click(screen.getByTestId("active"));
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  });
});
