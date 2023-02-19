import { Component } from "react";

// export default class ImageGalleryItem extends Component

function ImageGalleryItem ({data})
{
       
        return (
        <div>
        
                {
                    data.map(item => (
                       < li class="gallery-item" key={item.id}>
                
                        <img src={item.webformatURL} alt="car" />
                </li>  
                
                    ))
                }
            </div> 
        )
    
}

export default ImageGalleryItem