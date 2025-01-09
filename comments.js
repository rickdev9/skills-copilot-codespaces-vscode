// Create web server
// Create a route for comments
// Use the comments.json file as the data source

const express = require('express');
const app = express();
const PORT = 3000;
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
