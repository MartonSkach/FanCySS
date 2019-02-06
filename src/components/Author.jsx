import React from 'react';

const author = (props) => {
  return (
    <img
    id={`${props.id}`}
    key={props.id}
    className="section-2-portrait"
    src={props.src}
    alt="author"
    onClick={props.showClickedBook}
    style={{ width: '200px', height: '200px' }}
    />
  )
};

export default author;
