//Boxes.jsx
import React from 'react';

function Boxes({ boxes }) {
  console.log('boxes', boxes)
  return (
    <>
      {boxes.map((boxStyles, index) => (
        <div
          key={index}
          className="box"
          style={boxStyles}
        />
      ))}
    </>
  );
}

export default React.memo(Boxes);
