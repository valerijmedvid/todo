export type Task = {
  title: string
  completed: boolean
}

export type TodoList = {
  title: string
  tasks: Task[]
}

export type TodosState = {
  lists: TodoList[]
}
