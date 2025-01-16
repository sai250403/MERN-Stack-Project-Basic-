const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', { tasks });
});

// Create a new task
router.post('/tasks', async (req, res) => {
    const { title, description, dueDate } = req.body;
    const task = new Task({ title, description, dueDate });
    await task.save();
    res.redirect('/');
});

// Update a task
router.post('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;
    await Task.findByIdAndUpdate(id, { title, description, status, dueDate });
    res.redirect('/');
});

// Delete a task
router.post('/tasks/:id/delete', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
});

module.exports = router;
