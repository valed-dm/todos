import { v4 as uuidv4 } from "uuid";

export const mockedTasks = [
  {
    id: uuidv4(),
    title: "Test Title One",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "Test Title Two",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "Test Title Three",
    isDone: false,
  },
];
