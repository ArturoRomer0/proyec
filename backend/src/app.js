require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index'); // Importando rutas con require
const path = require('path');
const app = express();

// Middlewares
app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
// Routes
app.use('/api', router);


module.exports = app;