import {MESSAGES, NAMES, DESCRIPTIONS, COUNT_PHOTOS} from "./const.js";
import {getRandomInteger, getRandomArrayElement} from "./util.js";

const createComment = (element, index) => {
  const id = index + 1;
  const avatarNumber = getRandomInteger(1, 6);
  const avatar = `img/avatar-${avatarNumber}.svg`;
  const messageCount = getRandomInteger(1, 2);
  const message = Array.from({length: messageCount}, () => getRandomArrayElement(MESSAGES)).join(" ");
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

const photos = Array.from({length: COUNT_PHOTOS}, (_, index) => createPhoto(index));

export {createComment, createPhoto, photos};
