import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Vortex } from "react-loader-spinner";
import Modal from "components/Modal/Modal";

export default class ImageGallery extends Component{

    state = {
        response: [],
        page: 1,
        loading: false,
        errorMessage: '',
        isOpen: false,
        largeImage: ''      
        }

       
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.Request.request !== this.props.Request.request) {
            console.log("changes occured")
            console.log("value 1=", prevProps.Request.request);
            console.log("value 2=", this.props.Request.request);
            this.setState({
                loading: true
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
                .then(({ hits }) => { this.setState((prevState) => ({ response: [...prevState.response, ...hits], errorMessage: '' })); } )
                .catch((error) => ({ errorMessage: error.message }))
                .finally(()=>this.setState({loading: false}));
            
    }  
    
    loadMore = () => {
        this.setState((prevState) => ({
            page:prevState.page+1
        }))
    }

handleGalleryItem = fullImageUrl => {
    this.setState({
      largeImage: fullImageUrl,
      isOpen: true,
    });
  };

  //   toggleModal = (e) => {
  //   this.setState(prevState => ({
  //     isOpen: !prevState.isOpen,
  //     // largeImage: '',
  //   }));
  //     console.log(e.target);
  // };



    toggleModal = (e) => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
      console.log(e.target);
      // console.log(this.state.response.largeImageURL);
     }

    render() {
        const { response, isOpen, largeImage } = this.state;
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
            {!this.props.Request&& <div>Start your search</div>}
            {
                this.state.response && 
                <ul class="gallery">
                <ImageGalleryItem data={response} onClick={this.toggleModal} isOpen={isOpen} largeImage={ largeImage} /> 
                {this.props.Request && <button type="button" onClick={this.loadMore}>load more</button>}
                {/* {isOpen&&<Modal largeImageURL={response.largeImageURL} />} */}

{/* {this.state.isOpen && (
          <Modal onClose={this.toggleModal}>
            <div className="Close-box">
              <IconButton onClick={this.toggleModal} aria-label="Close modal">
                <CloseIcon width="20px" height="20px" fill="#7e7b7b" />
              </IconButton>
            </div>

            <img src={largeImage} alt="" className="Modal-image" />
          </Modal>
        )} */}


                        {/* {this.state.isOpen&&<Modal data={response} onClick={ this.handleModal}/>} */}
                        
             </ul> 
            }
            
            </>
        )
    }
}



