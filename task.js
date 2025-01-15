const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
    dueDate: { type: Date },
});

module.exports = mongoose.model('Task', taskSchema);
