import { Component } from "react";
import Modal from "components/Modal/Modal";
import { ImageItem, ImgStyle, ListItem } from "./ImageGalleryItem.styled";

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
        <ImageItem>        
            
                    < ListItem onClick={()=>this.toggleModal()}>                
                        <ImgStyle className="GalleryImage" src={webformatURL} alt={tags} />   
                        {this.state.isOpen&&<Modal largeImageURL={largeImageURL} />}
                    </ListItem> 
                    
                                 
        </ImageItem>
    </>
        ) 
   }   
}


