import { render, screen } from "@testing-library/react";
import App from "./App";

test("todos app renders at start", () => {
  const { container } = render(<App />);
  //screen.debug()
  const title = screen.getByRole("heading", { name: /todos for mindbox/i });

  expect(title).toBeInTheDocument();
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="container"
  >
    <div
      style="margin-top: 20px;"
    >
      <h1>
        todos for Mindbox
      </h1>
    </div>
    <div>
      <div
        class="todo-container"
      >
        <form
          style="margin-bottom: 10px;"
        >
          <input
            class="form-control"
            data-testid="todo-input"
            placeholder="What needs to be done?"
            type="text"
            value=""
          />
        </form>
        <div>
          <div
            class="todos-list"
          />
        </div>
        <div
          class="todo-footer"
        >
          <div
            style="margin-left: 5px;"
          >
            <span
              data-testid="items-left"
            >
              0
               items left
            </span>
          </div>
          <div
            class="todo-select"
          >
            <p
              data-testid="all"
              style="border: 1px solid white;"
            >
              All
            </p>
            <p
              data-testid="active"
            >
              Active
            </p>
            <p
              data-testid="completed"
            >
              Completed
            </p>
          </div>
          <div>
            <p
              data-testid="clear-completed"
            >
              Clear completed
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`);
});
