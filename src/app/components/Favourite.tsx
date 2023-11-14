import router from 'next/router';
import React from 'react';

const Favourite = ({ title, id }: any) => {

  function handleClick(): void {
    console.log(`clicked id: ${id} title: ${title}`);
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    const filtered = favorite.filter((fav) => fav.id !== id);
    localStorage.setItem('favorite', JSON.stringify(filtered));
  }


  function goToBeerGarden() {
    router.push({
      pathname: `/${id}`,
      query: { id, title },
    });
  }

  return (
    <div className="favourite-container" key={id} >
      <div className="favourite" onClick={() => goToBeerGarden()}>

        <img src="/img/close-bgarden-back.svg" alt="image" />
        <div className="favourite__title">{title}</div>
      </div>
      <div className="favourite-container__close-button">
        <button
          className="favourite-container__close-button--button"
          onClick={() => handleClick()}
        >
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default Favourite;
