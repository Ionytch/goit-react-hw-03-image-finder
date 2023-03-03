import { Component } from "react";
import Modal from "components/Modal/Modal";

export default class ImageGalleryItem extends Component
{state = {
        isOpen: false,
    }
       
     toggleModal = (e) => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
        const{ webformatURL, largeImageURL, tags } = this.props;

       return (<>       
        <div>        
            
                    < li class="gallery-item"  onClick={()=>this.toggleModal()}>                
                        <img src={webformatURL} alt={tags} />   
                        {this.state.isOpen&&<Modal largeImageURL={largeImageURL} />}
                    </li> 
                    
                                 
        </div>
    </>
        ) 
   }   
}


