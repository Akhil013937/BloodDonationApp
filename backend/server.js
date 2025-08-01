
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  console.log(req.body);
  res.status(200).send("Registration successful!");
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
