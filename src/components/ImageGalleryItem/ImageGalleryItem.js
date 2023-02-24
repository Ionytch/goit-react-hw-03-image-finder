import { Component } from "react";

// export default class ImageGalleryItem extends Component
import * as basicLightbox from 'basiclightbox'; 

function ImageGalleryItem ({data})
{
        
    return (<>
       
        <div>
        
                {
                    data.map(item => (
                       < li class="gallery-item" key={item.id}>
                
                        <img src={item.webformatURL} alt={item.tags} onClick={item.largeImageURL}/>
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