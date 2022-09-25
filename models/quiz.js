const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizSchema = new Schema({
    vote:{type: Number, required: true, default: 0},
    title:{type: String, required: true},
    
});

module.exports = mongoose.model('Quiz', quizSchema);