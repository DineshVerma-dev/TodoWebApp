import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodoAsync } from '../redux/actions';

function TodoForm() {
    const [text,settext] = useState("");
    const dispatch = useDispatch();

    const SubmitForm = (e) => {
      e.preventDefault();
      dispatch(addNewTodoAsync(text))

      settext('');
    }

    const onInputChange = (e) =>{
     settext(e.target.value)
    }
   

  return (
    <form className='flex justify-center my-6' onSubmit={SubmitForm}>
    <input
      type='text'
      placeholder='Enter a new To do..'
      onChange={onInputChange}
      value={text}
      className='w-3/5  p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
    />
  </form>
  
  )
}

export default TodoForm
