import React from 'react';


const Albums = (props) => {
console.log('Normal github changes are done')
  return (
    <ul>
      {props.albums.map((alb) => {
        return <li>{alb.title}</li>;
      })}
    </ul>
  );
};

export default Albums;
