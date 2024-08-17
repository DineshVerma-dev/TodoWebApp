import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      state.unshift(action.payload); 
    },
    getAllTodo: (state, action) => {
      return action.payload; 
    },
    toggletodo: (state, action) => {
      return state.map(todo =>
        todo._id === action.payload._id
          ? { ...todo, done: !todo.done }
          : todo
      );
    },
    updatetodo : (state,action) => {
      return state.map(todo =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    },
    deletetodo : (state,action) => {
      return  state.filter(todo => todo._id !== action.payload.id);
    }
  }
});

export const { addNewTodo, getAllTodo, toggletodo ,updatetodo ,deletetodo} = todosSlice.actions;

export default todosSlice.reducer;
