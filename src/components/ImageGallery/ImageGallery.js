import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Vortex } from "react-loader-spinner";
import { Gallerylist, LoadMoreButton } from "./ImageGallery.styled";

export default class ImageGallery extends Component{

    state = {
        response: [],
        page: 1,
        loading: false,
        errorMessage: '',
        totalImages: 0,
        largeImage: ''      
        }

       
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.Request.request !== this.props.Request.request) {
            console.log("changes occured")
            console.log("value 1=", prevProps.Request.request);
            console.log("value 2=", this.props.Request.request);
            this.setState({
                loading: true,
                page:1,
                response: [],
                totalImages: 0,
            });
            this.loadImages();
                        }
   
        
        if (prevState.page !== this.state.page) {
            this.loadImages();
        }      
       
    }

    loadImages = () => {
                 fetch(`https://pixabay.com/api/?q=${this.props.Request.request}&page=${this.state.page}&key=32152184-2ad461e647b19751df8bc3af5&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(( data ) => { this.setState((prevState) => ({ response: [...prevState.response, ...data.hits], totalImages:data.totalHits, errorMessage: '' })); } )
                .catch((error) => ({ errorMessage: error.message }))
                .finally(()=>this.setState({loading: false}));
            
    }  
    
    loadMore = () => {
        
        this.setState((prevState) => ({
            page:prevState.page+1
        }))
    }



      
    render() {
        const { response } = this.state;
        const { totalImages } = this.state;
        const totalPages = Math.ceil(totalImages / 12);
       
        
        
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
          
          {!this.props.Request && <div>Start your search</div>}
          
            {this.state.response && 
            <Gallerylist class="gallery">
                {response.map(item=> <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} tags={item.tags} largeImageURL={item.largeImageURL} /> )}
                
            </Gallerylist> 
            }
            { totalPages>1 && <LoadMoreButton type="button" onClick={this.loadMore}>load more</LoadMoreButton>}
            </>
        )
    }
}

// this.state.response &&this.props.Request &&

