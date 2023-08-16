const allowedCors = [
  /(https|http)?:\/\/(?:www\.|(?!www))front-movies.nomoredomains.xyz\/[a-z]+\/|[a-z]+\/|[a-z]+(\/|)/,
];
const errorMessages = {
  auth: 'Нужна авторизация',
  updateProfile: 'Email уже использован',
  image: 'Некорректный формат ссылки на картинку',
  movieNotFound: 'Фильм не найден',
  trailerLink: 'Некорректный формат ссылки на трейлер',
  userNotFound: 'Пользователь не найден',
  thumbnail: 'Некорректный формат ссылки на постер',
  createMovie: 'Некорректные данные при создании фильма',
  removeMovie: 'Попытка удалить фильм другого пользователя',
  createUser: 'Пользователь уже существует',
  incorrectData: 'Неправильные почта или пароль',
  incorrectEmail: 'Неправильный формат почты',
  incorrectPath: 'Неправильный путь',
  crash: 'Сервер сейчас упадёт',
};

module.exports = { allowedCors, errorMessages };
