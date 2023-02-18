import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
// import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component  {

  state = {
  request:''
}

  handleFormSubmit = request => { 
    console.log(request);
    this.setState({ request });
  }
  render() {
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
