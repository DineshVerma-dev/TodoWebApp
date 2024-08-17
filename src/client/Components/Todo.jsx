import React, { useEffect } from 'react'
import { getAllTodosAsync } from '../redux/actions/index'
import ListTodo from './ListTodo';
import { useDispatch ,useSelector} from 'react-redux'
function Todo() {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    useEffect(()=>{
      dispatch(getAllTodosAsync())
   },[dispatch])

  return (
    <article className='flex justify-center '>
        <ul className='w-10/12'>
            {
                todos.map(todos => (
                    <ListTodo
                    key={todos._id}
                    todos={todos}
                    />
                ))
            }
        </ul>
    </article>
  )
}

export default Todo
