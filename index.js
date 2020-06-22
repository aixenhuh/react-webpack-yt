const express = require('express');
const app = express();
const path = require('path');

// add middlewares
app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.static("public"));

