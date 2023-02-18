import { Component } from "react";

 class Searchbar extends Component {
     state = {
        request:''
     }
     handleChange = e => {
         this.setState({ request: e.currentTarget.value.toLowerCase() });
         
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.request.trim() === '') {
            alert("PLease, enter a request");
            return
        }
        const { onSubmit } = this.props;
        
        onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ request: ''});
    };
     render() {
         
         

     return(
        <header class="searchbar">
  <form class="form" onSubmit={this.handleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
                     placeholder="Search images and photos"
                     value={this.state.request}
                     onChange={this.handleChange}
    />
  </form>
</header>
    )   
    }
     
}
    
export default Searchbar;

