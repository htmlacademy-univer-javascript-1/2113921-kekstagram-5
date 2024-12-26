import { photos } from "./data.js";
import { renderPictures } from "./pictures.js";
import { showBigPicture } from "./big-picture.js";

renderPictures(photos);

const container = document.querySelector(".pictures");

container.addEventListener("click", (evt) => {
  const picture = evt.target.closest(".picture");
  if (!picture) {
    return;
  }

  const pictureId = Number(picture.dataset.pictureId);

  const photo = photos.find((el) => el.id === pictureId);

  showBigPicture(photo);
});
