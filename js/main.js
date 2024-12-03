const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const NAMES = [
  "Алексей",
  "Андрей",
  "Николай",
  "Иван",
  "Елена",
];

const DESCRIPTIONS = [
  "10 из 10",
  "Прекрасно!",
  "Отлично!",
  "Супер!",
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let commentIdCounter = 1;

const createComment = () => {
  const id = commentIdCounter++;
  const avatarNumber = getRandomInteger(1, 6);
  const avatar = `img/avatar-${avatarNumber}.svg`;

  const messageCount = getRandomInteger(1, 2);
  const messages = Array.from({length: messageCount}, () => getRandomArrayElement(MESSAGES));
  const message = messages.join(" ");

  const name = getRandomArrayElement(NAMES);

  return {
    id,
    avatar,
    message,
    name
  };
};

const createPhoto = (index) => {
  const id = index + 1;
  const url = `photos/${id}.jpg`;
  const description = getRandomArrayElement(DESCRIPTIONS);
  const likes = getRandomInteger(15, 200);

  const commentCount = getRandomInteger(0, 30);
  const comments = Array.from({length: commentCount}, createComment);

  return {
    id,
    url,
    description,
    likes,
    comments
  };
};

const countPhotos = 25;
const photos = Array.from({length: countPhotos}, (_, index) => createPhoto(index));

// console.log(photos);


//Структура обьекта который надо сгенерировать
// {
//   id: число от 1 до 25
//   url: адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25
//   description: случайно из DESCRIPTIONS
//   likes: Случайное число от 15 до 200
//   comments: Количество комментариев к каждой фотографии — случайное число от 0 до 30
// }

//Пример комментария
// comments = {
//   id: 135, //любое число
//   avatar: 'img/avatar-6.svg', //img/avatar-{{случайное число от 1 до 6}}.svg
//   message: 'В целом всё неплохо. Но не всё.', //случайно из MASSAGES
//   name: 'Артём', //случайно из NAMES
// }
