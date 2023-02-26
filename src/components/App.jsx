import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
// import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Vortex } from "react-loader-spinner";

export default class App extends Component  {

  state = {
    request: ''
     
}

  handleFormSubmit = request => { 
    console.log(request);
    this.setState({ request });
  }




  render() {
    console.log(this.state.request);
     return (
    <div
      style={{
        
           display: 'flex',
           flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
         <Searchbar onSubmit={this.handleFormSubmit} />
         
         <ImageGallery Request={ this.state.request} />
    </div>
  );
  }
 
};
