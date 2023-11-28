import React, { useState } from 'react';

const GardenDetails = ({ title, description }: any) => {

  const [isOpen , setIsOpen] = useState(false);

  const style = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }
  const noStyle = {
    
  }

  

  return (
    <div className="details">
      <div className="title"> {title}</div>
      <div className="info" style={isOpen ? noStyle : style}>{description}</div>
      <button className="read-more" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Read less..." : "Read more..."}</button>
    </div>
  );
};

export default GardenDetails;
