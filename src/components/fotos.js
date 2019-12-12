import React, { Component } from "react";
import axios from "axios";

class Fotos extends Component {
  state = {
    photos: [] // this is the only thing whose state gets updated in this component
  };

  componentWillReceiveProps(nextProps) {
    axios
      .get(
        // using the query in the url it takes less to load up because it doesn't have to load up all the items
        `https://jsonplaceholder.typicode.com/photos?albumId=${
          nextProps.selectedAlbumId
        }`
      )
      .then(res => {
      	console.log(res);
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const photoData = this.state.photos; // makes it easier to access the state
    return (
      <div>
        {!photoData ? (
          <option>...Loading</option>
        ) : (
          <div className="photobox_container">
            {photoData.map(photoItem => {
              // if (parseInt(this.state.selectedAlbumId) === parseInt(photoItem.albumId)) // this condition is no longer needed because I am updating the axios api url
              return <img key={photoItem.id} src={photoItem.thumbnailUrl}  />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Fotos;