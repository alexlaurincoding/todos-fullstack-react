var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require("mongoose");
const routes = require("./routes");
const Todos = require("./models/Todo");
const api = require("./api");

var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);
app.use('/users', usersRouter);
app.use('/', indexRouter);


mongoose
    .connect("mongodb://localhost:27017/todos", {useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => {
        console.log("Connected");
})

module.exports = app;
