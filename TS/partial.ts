interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
}

type TodoPartial = Partial<Todo>;

const todo3: TodoPartial = {
  title: "clean room",
  createAt: 421341234123412,
};
