import { Overlay, ModalStyle } from './Modal.styled';


export default function Modal ({largeImageURL}) {
  return (
    <Overlay class="overlay">
  <ModalStyle class="modal">
    <img src={largeImageURL} alt='' />
  </ModalStyle>
</Overlay>
  )
}
