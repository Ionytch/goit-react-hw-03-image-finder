import * as basicLightbox from 'basiclightbox';
import { Component } from "react";


export default function Modal ({largeImageURL}) {
  return (
    <div class="overlay">
  <div class="modal">
    <img src={largeImageURL} alt='' />
  </div>
</div>
  )
}







// export default function Modal ({largeImageURL,tags}) {
//   const instance =
//     basicLightbox.create(`
//     <div class="overlay">
//   <div class="modal">
//     <img src=${largeImageURL} alt=${tags} />
//   </div>
// </div>
// `)

//   instance.show()
// }



// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;
//     console.log(largeImageURL);
//     return (
//       <div class="overlay" onClick={this.handleBackdropClick}>
//         <div class="modal">
//           <img src={largeImageURL} alt='' />
//         </div>
//       </div>
//          )
//   }
// }

// Modal.defaultProps = {
//   children: null,
// };


// export default Modal


// basicLightbox.create(`
//     <div class="overlay">
//   <div class="modal">
//     <img src=${largeImageURL} alt=${tags} />
//   </div>
// </div>
// `).show()

// return createPortal(
//       <div className={styles.Overlay} onClick={this.handleBackdropClick}>
//         <div className={styles.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );