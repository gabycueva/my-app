import React, { Component } from "react";
import axios from "axios";

class Albumes extends Component {
  state = {
    albums: [] // this is the only thing whose state gets updated in this component
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        console.log(res);
        this.setState({
          albums: res.data
        });
      })
      .catch(err => console.log(err));
  }

  /*/ albums' dropdown wer/*e not loading up until I used componentWillReceiveProps(nextProps). Src: http://busypeoples.github.io/post/react-component-lifecycle/
  componentWillReceiveProps(nextProps) {
    // if (nextProps.selectedUserId === false) this.setState({ albums: [] });

    if (nextProps.selectedUserId)
      // manually force update props
      axios
        .get(
          // using the query in the url it takes less to load up because it doesn't have to load up all the items
          `https://jsonplaceholder.typicode.com/albums?userId=${
            nextProps.selectedUserId
          }`
        )
        .then(res => {
          this.setState({
            albums: res.data
          });
        })
        .catch(err => console.log(err));
  }
*/
    handleClick = albumId => {
    // checks if user is active already, sets the state to false in home and consequently the button becomes white again
    if (albumId === this.props.selectedAlbumId) {
      this.props.onAlbumSelected(false);
    } else {
      this.props.onAlbumSelected(albumId);
    } // 2) handleClick() passes the userId to onUserSelected, which has been created in Home and will uopdate the state
  };

    render() {
    const albumData = this.state.albums; // makes it easier to access the state
    return (
      <div className="main_container">
        <div className="user_container">
          <h2 className="title">Títulos de álbumes </h2>
          {albumData.length === 0  ? (
            <p>...Cargando</p>
          ) : (
            <ul className="titulosAlbumes">
              {albumData.map(albumItem => {
                return (
                  <div
                    key={albumItem.id} // you can't render two things with the same id. either pass a key to map or do like this
                    className="listaTitulos"
                    // 1) call handleClick func with the user id as parameter
                    onClick={() => this.handleClick(albumItem)}
                    // check if the selectedUserId I passed from Home as props is the same as the userId and changes its colour
                    style={{
                      // style wants an object. backgroundcolor is a convention for react which wouldn't accept "backgroud-color"
                      backgroundColor:
                        this.props.selectedUserId === albumItem.id // check if the selectedUserId is the same and the one we are looping in

                          
                    }}
                  >
                    {albumItem.title}
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Albumes;
