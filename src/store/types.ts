export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}
