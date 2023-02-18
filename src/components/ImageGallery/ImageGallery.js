import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component{

    state = {
        response: [],
        loading: false
}

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.Request !== this.props.Request) {
            console.log("changes occured")
            console.log("value 1=", prevProps.Request);
            console.log("value 2=", this.props.Request);
            
            fetch(`https://pixabay.com/api/?q=${this.props.Request}&page=1&key=32152184-2ad461e647b19751df8bc3af5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(console.log)
                .then(response=>this.setState({response:response.data.hits}));
        }
    }
    
    render() {
        return (<>
            <ul class="gallery">
  {this.state.response.map(item => <ImageGalleryItem key={item.hits.id} data={item.hits} />)}
            </ul>
            </>
        )
    }
}