
import Todo from '../Model/Todo.js'

export const AddTodo = async (req, res) => {
    try {
        const newtodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()

        })

        await newtodo.save();

        return res.status(200).json(newtodo)

    } catch (error) {
        return res.status(500).json(error.message);
    }

}
export const getAlltodos = async (req, res) => {
    try {

        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return res.status(200).json(todos)

    } catch (error) {
        return res.status(500).json(error.message);
    }

}
export const toggletododone = async (req, res) => {
   
        try {
            const todo = await Todo.findById(req.params.id);
            if (!todo) return res.status(404).send('Todo not found');
    
            todo.done = !todo.done; // Toggle the done status
            await todo.save();
    
            res.json(todo); 
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}

export const updatetodo = async (req, res) => {
    try {
       const todo = await Todo.findByIdAndUpdate(
        req.params.id, // Use directly the ID
        { data: req.body.data },
        { new: true, runValidators: true } // Options to return the updated document and run validators
       );
       
       if (!todo) {
           return res.status(404).json({ message: "Todo not found" });
       }

       return res.status(200).json(todo);
    } catch (error) {
        console.error('Error updating todo:', error);
        return res.status(500).json({ message: error.message });
    }
}

export const deletetodo = async (req, res) => {
    try {
        // Find and delete the todo by its ID
        const todo = await Todo.findByIdAndDelete(req.params.id);

        // If no todo is found, return a 404 status
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        // Return the deleted todo or a success message
        return res.status(200).json({ message: 'Todo deleted successfully', todo });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
