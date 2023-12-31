var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var chatRouter = require('./routes/chat')
var userapiRouter = require('./routes/user.api');
var productapiRouter= require('./routes/product.api');
var billrouter = require('./routes/API/bill');
var shopRouter = require('./routes/shop');
var salemanRouter = require('./routes/salesman');
var commentsRouter = require('./routes/comments');
var thanhtoanRouter = require('./routes/API/thanhtoan');
var thanhtoanVnpayRouter = require('./routes/API/thanhtoanvnpay');
var billweb = require('./routes/bill');
var voucherRouter = require('./routes/voucher');
var categoryApi = require('./routes/API/category');
var tkebill = require('./routes/API/thongke')
var vitrunggianRouter = require('./routes/vitrunggian');
var APIVitrunggianRouter = require('./routes/API/vitrunggian.API');

const { error } = require('console');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'NHKDNGHaksfsndfhaiserkndv834be23sdhf21gsb',
  resave: false,
  saveUninitialized: true 
 }))
 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/chat', chatRouter);
app.use('/user/api', userapiRouter);
app.use('/product', productapiRouter);
app.use('/salesman', salemanRouter);
app.use('/shop', shopRouter);
app.use('/bill', billrouter);
app.use('/Comments',commentsRouter);
app.use('/thanhtoan', thanhtoanRouter);
app.use('/payment', thanhtoanVnpayRouter);
app.use('/billw',billweb)
app.use('/Voucher',voucherRouter);
app.use('/category/api',categoryApi);
app.use('/thongke', tkebill);
app.use('/vitrunggian', vitrunggianRouter);
app.use('/vitrunggianapi', APIVitrunggianRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
