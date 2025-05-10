const { readData, writeData } = require('../models/todoModel');

let idCounter = 1;

const getTodos = (req, res) => {
  const todos = readData();
  res.json(todos);
};

const addTodo = (req, res) => {
  const todos = readData();
  const newTodo = { id: idCounter++, ...req.body };
  todos.push(newTodo);
  writeData(todos);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const todos = readData();
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return res.status(404).send("Todo not found");

  todos[index] = { ...todos[index], ...req.body };
  writeData(todos);
  res.json(todos[index]);
};

const deleteTodo = (req, res) => {
  let todos = readData();
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return res.status(404).send("Todo not found");

  todos.splice(index, 1);
  writeData(todos);
  res.send("Todo deleted");
};

const searchTodos = (req, res) => {
  const q = req.query.q?.toLowerCase();
  if (!q) return res.status(400).send("Query param 'q' is required");

  const todos = readData();
  const result = todos.filter(todo => todo.title.toLowerCase().includes(q));
  res.json(result);
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  searchTodos
};

