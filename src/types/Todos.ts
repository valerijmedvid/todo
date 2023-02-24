export type Todo = {
  title: string
  completed: boolean
}

export type TodoList = {
  title: string
  todos: Todo[]
}

export type TodosState = {
  lists: TodoList[]
}
