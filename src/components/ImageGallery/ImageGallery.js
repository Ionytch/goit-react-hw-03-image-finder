import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Vortex } from "react-loader-spinner";

export default class ImageGallery extends Component{

    state = {
        response: [],
        loading: false,
        errorMessage:''
}

    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.Request !== this.props.Request) {
            console.log("changes occured")
            console.log("value 1=", prevProps.Request);
            console.log("value 2=", this.props.Request);
            this.setState({
                loading: true
            });
            
            fetch(`https://pixabay.com/api/?q=${this.props.Request}&page=1&key=32152184-2ad461e647b19751df8bc3af5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                // .then(console.log)
                .then((hits) => { this.setState({ response: hits, errorMessage: '' }) })
                .catch((error) => ({ errorMessage: error.message }))
                .finally(()=>this.setState({loading: false}));
        }
    }
    
    render() {
        const { response } = this.state;
        return (<>
            {this.state.loading&& <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>}
            <ul class="gallery">
                {/* <ImageGalleryItem  data={response} />  */}
             </ul> 
            </>
        )
    }
}



// key={item.hits.id}