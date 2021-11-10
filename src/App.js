import React, { useState, Suspense } from 'react';
import axios from 'axios';
import Photos from './Components/Photos';






function App() {
  const Albums=React.lazy(()=> import('./Components/Albums'))
  const [images, setImages] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoadImages, setIsLoadImages] = useState(false);
  const [isLoadAlbums, setIsLoadAlbums] = useState(false);
  const onClickHandlerForPhotos = () => {
    setIsLoadImages(true);
    setIsLoadAlbums(false);
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      setImages(res.data);
    });
  };
  const onClickHandlerForAlbum = () => {
    setIsLoadImages(false);
    setIsLoadAlbums(true);
    axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
      setAlbums(res.data);
    });
  };
  return (
    <div>
      <button onClick={onClickHandlerForPhotos}>Photos</button>
      <button onClick={onClickHandlerForAlbum}>Albums</button>
      {isLoadImages && <Photos images={images} />}
      <Suspense fallback={<p>Loading albums...</p>}>
      
      {isLoadAlbums && <Albums albums={albums} />}
 
      </Suspense>
    </div>
  );
}

export default App;
