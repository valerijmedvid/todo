import AddList from './components/AddList'
import { useSelector } from 'react-redux'
import { selectTodosList } from './slicers/todosListSlice'

export default function App() {
  const todos = useSelector(selectTodosList)
  console.log(todos)
  return (
    <div className='flex flex-row'>
      <>
        {todos.map((list, index) => {
          return (
            <div className='w-32 m-2 pl-1 pb-5 rounded bg-gray-50 font-bold' key={index}>
              {list.title}
            </div>
          )
        })}
      </>
      <AddList />
    </div>
  )
}
