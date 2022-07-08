const express = require('express');

const places = require('./routes/place');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.post('/api/signup', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Signup successful!',
  });
});

app.use('/api/place', require('./routes/place'));

app.use((req, res) => {
  res.json({ message: 'app started!' });
});

module.exports = app;
