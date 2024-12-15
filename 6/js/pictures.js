const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");
const container = document.querySelector(".pictures");
const fragment = document.createDocumentFragment();

const createPicture = (photo) => {
  const {comments, description, likes, url, id} = photo;
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector(".picture__img").src = url;
  picture.querySelector(".picture__img").alt = description;
  picture.querySelector(".picture__comments").textContent = comments.length;
  picture.querySelector(".picture__likes").textContent = likes;
  picture.dataset.pictureId = id;

  return picture;
};

const renderPictures = (pictures) => {

  pictures.forEach((picture) => {
    fragment.append(createPicture(picture));
  });

  container.append(fragment);
};

export { renderPictures };
