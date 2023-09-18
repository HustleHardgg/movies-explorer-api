const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const unknownError = require('./middlewares/unknownError');
const { mongodbURL, PORT } = require('./utils/config');
const limiter = require('./middlewares/limiter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(require('./routes/index'));

mongoose.connect(mongodbURL, { useNewUrlParser: true });
app.use(errorLogger);
app.use(errors());
app.use(unknownError);

app.listen(PORT, (err) => {
  if (err) {
    console.log('Ошибка при запуске', ...err);
  }
  console.log(`Сервер запущен на порту ${PORT}`);
});
