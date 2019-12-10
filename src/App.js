// Let's import React, our styles and React Async
import React from 'react';
import './App.css';
import Async from 'react-async';

// We'll request user data from this API
const loadAlbums = () =>
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

const loadPictures = () =>
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// Our component
function App() {
  return (
    <div className="container">
      <Async promiseFn={loadAlbums, loadPictures}>
        {({ data, err, isLoading }) => {
          if (isLoading) return "Cargando aplicación..."
          if (err) return `Something went wrong: ${err.message}`

          if (data)
            return (
              <div>
                {data.map(albums=> (
                  <div className="row prev">
                    <div className="col-md-12">
                    <img src={albums.thumbnailUrl} />
                      <p className="titulo">{albums.title}</p>
                      <button className="ver">Ver fotos</button>
                    </div>
                  </div>
                ))}
              </div>
            )
        }}
      </Async>
    </div>
  );
}

export default App;
