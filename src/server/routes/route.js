import express from 'express';
import { AddTodo ,getAlltodos ,toggletododone ,updatetodo,deletetodo} from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos',AddTodo);
route.get('/todos',getAlltodos);
route.patch('/todos/:id',toggletododone)
route.patch('/todos/:id',updatetodo)
route.delete('/todos/:id',deletetodo)

export default route;