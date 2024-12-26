import {COMMENTS_PER_STEP} from "./const.js";

const bigPicture = document.querySelector(".big-picture");
const body = document.body;
const bigImg = bigPicture.querySelector(".big-picture__img img");
const likesCount = bigPicture.querySelector(".likes-count");
const commentsCount = bigPicture.querySelector(".comments-count");
const socialCaption = bigPicture.querySelector(".social__caption");
const socialCommentsList = bigPicture.querySelector(".social__comments");
const commentCountBlock = bigPicture.querySelector(".social__comment-count");
const commentsLoader = bigPicture.querySelector(".comments-loader");
const bigPictureClose = bigPicture.querySelector(".big-picture__cancel");

const onPopupEscKeydown = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeBigPicture();
  }
};

let currentComments = [];
let commentsShown = 0;

function renderNextComments() {
  const startIndex = commentsShown;
  const endIndex = Math.min(commentsShown + COMMENTS_PER_STEP, currentComments.length);
  const fragment = document.createDocumentFragment();

  for (let i = startIndex; i < endIndex; i++) {
    const {avatar, name, message} = currentComments[i];
    const li = document.createElement("li");
    li.classList.add("social__comment");
    const img = document.createElement("img");
    img.classList.add("social__picture");
    img.src = avatar;
    img.alt = name;
    img.width = 35;
    img.height = 35;

    const p = document.createElement("p");
    p.classList.add("social__text");
    p.textContent = message;

    li.append(img);
    li.append(p);
    fragment.append(li);
  }

  socialCommentsList.append(fragment);
  commentsShown = endIndex;
  updateCommentCounter();

  if (commentsShown >= currentComments.length) {
    commentsLoader.classList.add("hidden");
  } else {
    commentsLoader.classList.remove("hidden");
  }
}

function updateCommentCounter() {
  commentCountBlock.innerHTML = `
    ${commentsShown} из
    <span class="comments-count">${currentComments.length}</span>
    комментариев
  `;
}

function renderPhotoData(photo) {
  bigImg.src = photo.url;
  bigImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
}

function showBigPicture(photo) {
  renderPhotoData(photo);
  currentComments = photo.comments;
  commentsShown = 0;
  socialCommentsList.innerHTML = "";
  commentCountBlock.classList.remove("hidden");
  commentsLoader.classList.remove("hidden");
  renderNextComments();

  bigPicture.classList.remove("hidden");
  body.classList.add("modal-open");

  document.addEventListener("keydown", onPopupEscKeydown);
  bigPictureClose.addEventListener("click", closeBigPicture);
  commentsLoader.addEventListener("click", onLoadMoreClick);
}

function closeBigPicture() {
  bigPicture.classList.add("hidden");
  body.classList.remove("modal-open");

  document.removeEventListener("keydown", onPopupEscKeydown);
  bigPictureClose.removeEventListener("click", closeBigPicture);
  commentsLoader.removeEventListener("click", onLoadMoreClick);
}

function onLoadMoreClick() {
  renderNextComments();
}

export { showBigPicture };
