const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello World' }));
app.get('/date', (req, res) => res.json({ date: new Date() }));

module.exports = app;
