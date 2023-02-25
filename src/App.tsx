import AddTodoList from './components/AddTodoList'
import { TodoListBox } from './components/TodoListBox'
import { useSelector } from 'react-redux'
import { selectTodosList } from './slicers/todosListSlice'

export default function App() {
  const todos = useSelector(selectTodosList)

  return (
    <div className='flex flex-row items-stretch'>
      <>
        {todos.map((list, index) => {
          return <TodoListBox todoList={list} todoListIndex={index} key={index} />
        })}
      </>
      <AddTodoList />
    </div>
  )
}
