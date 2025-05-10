const fs = require('fs');
const path = './db.json';

function readData() {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data).todos;
}

function writeData(todos) {
  fs.writeFileSync(path, JSON.stringify({ todos }, null, 2));
}

module.exports = { readData, writeData };
