const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const Todo = require('./models/Todo');
require('./db')
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3000']
}))

app.get('/todos', async (req, res) => {
    try {
        const tasks =  await  Todo.find()
        res.json(tasks)
    }
    catch (er) {
        console.log('Mistake in getting tasks', er);
        res.status(500).json({ error: 'Something went wrong' })
    }

})




app.post('/todos', async (req, res) => {
    try {
        const { title, description, dueDate, completed } = req.body;

        const existingTask = await Todo.findOne({ title });

        if (existingTask) {
            return res.status(400).json({ message: 'Task with this title already exists' });
        }

        const newTask = new Todo({ title, description, dueDate, completed });
        const savedTask = await newTask.save();
        
        res.status(201).json({
            message: `Created new task`,
            task: savedTask,
        });
    } catch (er) {
        console.log('Mistake in creating task', er);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


app.put('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

        // Оновлення завдання за ID
        const updatedTask = await Todo.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: `Task with ID ${id} not found` });
        }

        res.json({
            message: `Task with ID ${id} is updated`,
            task: updatedTask
        });
    } catch (er) {
        console.log('Error in updating task', er);
        res.status(500).json({ error: 'Something went wrong in updating' });
    }
});



app.delete('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await Todo.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: `Task with ID ${id} not found` });
        }

        res.json({ message: `Task with ID ${id} is successfully deleted` });
    } catch (er) {
        console.log('Error in deleting task', er);
        res.status(500).json({ error: 'Something went wrong in deleting' });
    }
});


app.listen(port, () => {
    console.log(`RESTfull API is running at http://localhost:${port}`)
})