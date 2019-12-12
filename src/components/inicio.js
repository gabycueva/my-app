import React, { Component } from "react";
// import User from "./User";
import Albumes from "./albumes";
import Fotos from "./fotos";
import Usuarios from "./usuarios";

class Inicio extends Component {
  state = {
    selectedUserId: false,
    selectedAlbumId: false
  };

  // gets the userId from the component User, to which it's passed as props
  onUserSelected = userId => {
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  onAlbumSelected = album => {
    this.setState({ selectedUserId: album.userId, selectedAlbumId: album.id });
  };

  render() {
    return (
      <div className="container">
          <div className="row">
          <div className="albumes_container">
            <Albumes
              // Pass the selectedUserId state as props to Album Component, this will update Axios's url request for album
              //selectedUserId={this.state.selectedUserId}
              // Pass the func onAlbumSelected to Album Component, this will update the state of selectedAlbumId here in Home.js
              onAlbumSelected={this.onAlbumSelected}
            />
          </div>

          <div className="fotos_container">
              <Usuarios
              selectedUserId={this.state.selectedUserId}
              />
              <Fotos 
                  selectedAlbumId={this.state.selectedAlbumId}
              />
            </div>
          </div>
      </div>
    );
  }
}
export default Inicio;
