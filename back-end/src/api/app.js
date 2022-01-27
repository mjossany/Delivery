const express = require('express');
const { json } = require('body-parser');
const root = require('../database/controllers/root');
const error = require('../database/middlewares/error');
const cors = require('cors');
const app = express();

app.use(json());

app.use(cors());

app.use('/', root);

app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
