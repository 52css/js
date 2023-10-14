interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type TodoPick = Pick<Todo, "title" | "completed">;

const todo2: TodoPick = {
  title: "clean room",
  completed: false,
};
