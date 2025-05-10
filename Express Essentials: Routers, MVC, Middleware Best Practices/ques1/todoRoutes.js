const express = require('express');
const {
  getTodos, addTodo, updateTodo, deleteTodo, searchTodos
} = require('../controllers/todoController');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.get('/search', searchTodos);

module.exports = router;
