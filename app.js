const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const routes = require('./routes');
const limiter = require('./middlewares/limiter');
const cors = require('./middlewares/cors');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./errors/errorHandler');

require('dotenv').config();

const { PORT = 3000 } = process.env;

const { errorMessages } = require('./utils/constants');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors);

const mongoDB = 'mongodb://127.0.0.1:27017/';
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(errorMessages.crash);
  }, 0);
});

app.use('/', limiter);

// роуты в index.js
routes(app);

// обработка ошибок
app.use(errorHandler);
app.use(errorLogger);
app.use(errors());

app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
