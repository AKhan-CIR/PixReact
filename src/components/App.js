//REFACTORED
import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// import React from "react";
// import axios from "axios";
// import SearchBar from "./SearchBar";

// class App extends React.Component {
//   state = {
//     images: []
//   };
//   async onSearchSubmit(term) {
//     await axios;
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//       params: { query: term },
//       headers: {
//         Authorization:
//           "Client-ID 44104e6d40fe3e60317ee7d62345180f2af6cc5ad1fdaad144da60d553ae04ff"
//       }
//     });
//     this.setState({ images: response.data.results });
//   }

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         Found: {this.state.images.length} images
//       </div>
//     );
//   }
// }

// export default App;
