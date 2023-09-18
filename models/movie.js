const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Укажите страну создания фильма'],
  },
  director: {
    type: String,
    required: [true, 'Укажите режиссёра фильма'],
  },
  duration: {
    type: Number,
    required: [true, 'Укажите продолжительность фильма'],
  },
  year: {
    type: String,
    required: [true, 'Укажите год выпуска фильма'],
  },
  description: {
    type: String,
    required: [true, 'Укажите описание фильма'],
  },
  image: {
    type: String,
    required: [true, 'Укажите ссылку на постер фильма'],
  },
  trailerLink: {
    type: String,
    required: [true, 'Укажите ссылку на трейлер фильма'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Укажите ссылку на минипостер фильма'],

  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number, /* Тип данных на уточнении пока ставлю число? */
    required: true,
  },
  nameRU: {
    type: String,
    required: [true, 'Укажите название фильма на русском языке'],
  },
  nameEN: {
    type: String,
    required: [true, 'Укажите название фильма на английском языке'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
