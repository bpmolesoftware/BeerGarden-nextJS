import React from 'react';

const Favourite = ({ title, id }: any) => {
  function handleClick(): void {
    console.log(`clicked id: ${id} title: ${title}`);
  }

  return (
    <div className="favourite" key={id}>
      <img src="/img/close-bgarden-back.svg" alt="image" />
      <div className="favourite__title">{title}</div>
      <div className="favourite__close-button">
        <button
          className="favourite__close-button--button"
          onClick={() => handleClick()}
        >
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default Favourite;
