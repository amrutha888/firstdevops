const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! from the manual CICD trigger, with K8s commands in cmd. ');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
