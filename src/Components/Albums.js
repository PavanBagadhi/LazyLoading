import React from 'react';


const Albums = (props) => {
  console.log('changes')
  return (
    <ul>
      {props.albums.map((alb) => {
        return <li>{alb.title}</li>;
      })}
    </ul>
  );
};

export default Albums;
