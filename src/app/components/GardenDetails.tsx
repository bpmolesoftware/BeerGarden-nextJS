import React from 'react';

const GardenDetails = ({ title, description }: any) => {
  return (
    <div className="details">
      <div className="title"> {title}</div>
      <div className="info">{description}</div>
    </div>
  );
};

export default GardenDetails;
