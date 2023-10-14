interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type TodoOmit = Omit<Todo, "description" | "completed">;

const todo1: TodoOmit = {
  title: "clean room",
  createAt: 421341234123412,
};
