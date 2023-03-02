import { Component } from "react";


import * as basicLightbox from 'basiclightbox'; 
import Modal from "components/Modal/Modal";
// export default class ImageGalleryItem  extends Component
function ImageGalleryItem ({data, onClick, isOpen, largeImage})
{
       
   
        
    return (<>       
        <div>        
            {
                data.map(item => (
                    < li class="gallery-item" key={item.id} onClick={(e) => onClick(e,isOpen)}>                
                        <img src={item.webformatURL} alt={item.tags} />   
                        {isOpen&&<Modal largeImageURL={item.largeImageURL} />}
                    </li>                 
                    ))
            }
            {/* {isOpen&&<Modal largeImageURL={largeImage} />} */}
            </div> 
            <div>
                 
        </div>
    </>
        ) 
      
   
    
}

export default ImageGalleryItem

// onClick={Modal(item.largeImageURL,item.tag)}

// onClick={() => onClick(item.largeImageURL)}
// toggleModal={this.toggleModal} 