import { configureStore } from '@reduxjs/toolkit';
import todosSlice from "./reducer/todosReducer"

const store = configureStore({
    reducer: {
        todos: todosSlice, 
    },
});

export default store;
