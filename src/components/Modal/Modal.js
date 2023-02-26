import * as basicLightbox from 'basiclightbox';

export default function Modal (largeImageURL,tags) {
  const instance =
    basicLightbox.create(`
    <div class="overlay">
  <div class="modal">
    <img src=${largeImageURL} alt=${tags} />
  </div>
</div>
`)

  instance.show()
}
