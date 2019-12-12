import React, { Component } from "react";
import axios from "axios";

class Usuarios extends Component {
  state = {
    user: [] // this is the only thing whose state gets updated in this component
  };

  componentWillReceiveProps(nextProps) {
    axios
      .get(
        // using the query in the url it takes less to load up because it doesn't have to load up all the items
        `https://jsonplaceholder.typicode.com/users?id=${
          nextProps.selectedUserId
        }`
      )
      .then(res => {
      	console.log(res);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const userData = this.state.user; // makes it easier to access the state
    return (
      <div>
        {!userData ? (
          <option>...Loading</option>
        ) : (
          <div className="ver_usuarios">
            {userData.map(userItem => {
              // if (parseInt(this.state.selectedAlbumId) === parseInt(photoItem.albumId)) // this condition is no longer needed because I am updating the axios api url
              return( 
              <div>
                  <p>{userItem.name}</p>
                  <p>{userItem.email}</p>
                  <p>{userItem.address.street} {userItem.address.suite} {userItem.address.city}</p>
              </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}



export default Usuarios;