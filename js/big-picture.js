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

function renderPhotoData(photo) {
  bigImg.src = photo.url;
  bigImg.alt = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
}

function renderComments(comments) {
  socialCommentsList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  comments.forEach(({avatar, name, message}) => {
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
  });

  socialCommentsList.append(fragment);
}

function showBigPicture(photo) {
  renderPhotoData(photo);
  renderComments(photo.comments);

  commentCountBlock.classList.add("hidden");
  commentsLoader.classList.add("hidden");

  bigPicture.classList.remove("hidden");
  body.classList.add("modal-open");

  document.addEventListener("keydown", onPopupEscKeydown);
  bigPictureClose.addEventListener("click", closeBigPicture);
}

function closeBigPicture() {
  bigPicture.classList.add("hidden");
  body.classList.remove("modal-open");

  document.removeEventListener("keydown", onPopupEscKeydown);
  bigPictureClose.removeEventListener("click", closeBigPicture);
}

export { showBigPicture };
