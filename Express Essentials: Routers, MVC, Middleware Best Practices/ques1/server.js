const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use('/todos', todoRoutes);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
