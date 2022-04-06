import React from 'react';
// import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import LazyLoad  from 'react-lazyload';


const Photos = (props) => {
  return props.images.map((img) => {
    // return (
    //   <LazyLoadImage
    //     src={img.url}
    //     alt={img.title}
    //     width="500px"
    //     height="400px"
    //   />
    // );
    return (
      <LazyLoad height={100} once>
        <img src={img.url} alt={img.title} width="500px" height="400px" />
      </LazyLoad>
    );

  });
};

// export default trackWindowScroll(Photos)
export default Photos;


//Added some data in the content
