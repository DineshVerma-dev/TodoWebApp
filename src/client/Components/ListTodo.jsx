import React, { useState } from 'react';
import { toggletodoAsync, updatetodoAsync ,deletetodoAsync} from '../redux/actions';
import { useDispatch } from 'react-redux';

function ListTodo({ todos }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todos.data);

  const handleToggle = () => {
    dispatch(toggletodoAsync(todos._id)); // Correctly dispatch the action with the todo ID
  };

  const oneFormSubmit = (e) => {
    e.preventDefault();
    setEditing(false); // Close the editing form
    dispatch(updatetodoAsync(todos._id, text));
  };

  const deletetodo = () => {
    dispatch(deletetodoAsync(todos._id))
  }

  return (
    <li
      className={`p-6 overflow-x-hidden rounded-xl cursor-pointer m-3 
        ${todos.done ? 'bg-slate-600  line-through ' : 'bg-slate-600'}`}
      onClick={handleToggle}
    >
      <span style={{ display: editing ? 'none' : 'inline' }} className='text-rose-50'>
        {todos.data}
      </span>

      <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={oneFormSubmit}>
        <input
          type='text'
          value={text}
          className={`w-10/12  text-lg bg-slate-600 text-teal-50 border-none border-b-slate-100 `}
          
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className='float-right ' onClick={deletetodo}>
        <i className='fas fa-trash' />
      </span>

      <span
        className='float-right mr-7'
        onClick={(e) => {
          e.stopPropagation(); 
          setEditing(prevState => !prevState);
        }}
      >
        <i className='fas fa-pen' />
      </span>
    </li>
  );
}

export default ListTodo;
