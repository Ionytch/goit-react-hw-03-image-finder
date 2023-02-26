import { Component } from "react";

// export default class ImageGalleryItem extends Component
import * as basicLightbox from 'basiclightbox'; 
// import Modal from "components/Modal/Modal";

function ImageGalleryItem ({data})
{
    const Modal = event => {
        console.log(event.target)
        const instance =
            basicLightbox.create(`
    <div class="overlay">
  <div class="modal">
    <img src=${data.largeImageURL} alt=${data.tags} />
  </div>
</div>
`)
            instance.show();
        }
    
        
    return (<>
       
        <div>
        
                {
                    data.map(item => (
                       < li class="gallery-item" key={item.id}>
                
                            <img src={item.webformatURL} alt={item.tags} onClick={ Modal} />
                </li>  
                
                    ))
                }
            </div> 
            <div>
                 
        </div>
    </>
        )
    
}

export default ImageGalleryItem

// onClick={Modal(item.largeImageURL,item.tag)}