import React from 'react';

const Favourite = ({ title, id }: any) => {
  return (
    <div className="favourite" id={id}>
      <div className="favourite__img">
        <img src="img/small-location.svg" alt="image" />
      </div>
      <div className="favourite__title">{title}</div>
      <button className="favourite__close-button">x</button>
    </div>
  );
};

export default Favourite;
