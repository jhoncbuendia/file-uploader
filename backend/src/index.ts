
import * as express from 'express';
import { Request, Response } from 'express';
import * as createError from 'http-errors';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const {
    PORT = 3000,
} = process.env;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
    res.send({
      message: 'hello world',
    });
  });

// error handler
app.use(function(err: any, req: Request, res: Response, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
