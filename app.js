var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')
const log = require('./middlewares/userLogs')

const indexRouter = require('./routes/index.routes');
const cadastroRouter = require('./routes/cadastro.routes')
const usuariosRouter = require('./routes/usuarios.routes')
const loginRouter = require('./routes/login.routes')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(log)

app.use('/', indexRouter);
app.use('/cadastro', cadastroRouter)
app.use('/usuario', usuariosRouter)
app.use('/login', loginRouter)

// catch 404 and forward to error handler

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error')
});

module.exports = app;
