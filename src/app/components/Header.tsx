import { useRouter } from 'next/router';
import React, { useState } from 'react';

import AddtoFavModal from './AddtoFavModal';

let favoriteData: any;
if (typeof window !== 'undefined') {
  favoriteData = JSON.parse(localStorage.getItem('favorite'));
}

const Header = ({ id, title }: any) => {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  function handleHome(): void {
    router.push(`/beergarden-map`);
  }

  function goToFavaurites(): void {
    router.push(`/favourites`);
  }

  function addToFavorites() {
    console.log('localstorage: ', localStorage.getItem('favorite'));
    if (localStorage.getItem('favorite') === null) {
      favoriteData = [];
      favoriteData.push({ id: `${id}`, title: `${title}` });
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
    } else if (localStorage.getItem('favorite')?.length === 0) {
      favoriteData.push({ id: `${id}`, title: `${title}` });
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
    } else {
      const found = favoriteData.some((el) => el.id === id);
      if (!found) {
        favoriteData.push({ id: `${id}`, title: `${title}` });
        localStorage.setItem('favorite', JSON.stringify(favoriteData));
      }
    }
    toggleModal();
  }

  const [modal, setModal] = useState(false);

  function toggleModal(): void {
    setModal(!modal);
    console.log(`toggle: ${modal}`);
  }

  return (
    <>
      <div className="header">
        <div className="header__back" onClick={() => handleBack()}>
          <img className="image" src="/img/back-arrow.svg" alt="back" />
          <p className="header__title">Back </p>
        </div>
        <div className="header__home" onClick={() => handleHome()}>
          <img className="image" src="/img/home.svg" alt="back" />
          <p className="header__title">Home </p>
        </div>
        <div className="header__favourites" onClick={() => addToFavorites()}>
          <img className="image" src="/img/fav.svg" alt="back" />
          <p className="header__title">Add to favourites</p>

          <div className="header__favourites--popup hidden">
            <div>Added to favourites</div>
            <button>&#10006;</button>
          </div>
        </div>
        <div className="header__gallery" onClick={() => goToFavaurites()}>
          <img className="image" src="/img/gallery.svg" alt="back" />
          <p className="header__title">Favourites</p>
        </div>
      </div>
      {modal && <AddtoFavModal title={title} toggle={toggleModal} />}
      <div className="header-mobile">
        <div className="header-mobile__top">
          <div className="header__back" onClick={() => handleBack()}>
            <img className="image" src="/img/back-arrow.svg" alt="back" />
            <p className="header__title">Back </p>
          </div>
        </div>
        <div className="header-mobile__bottom">
          <div className="header__home" onClick={() => handleHome()}>
            <img className="image" src="/img/home.svg" alt="back" />
          </div>
          <div className="header__favourites" onClick={() => addToFavorites()}>
            <img className="image" src="/img/fav.svg" alt="back" />
          </div>
          <div className="header__gallery" onClick={() => goToFavaurites()}>
            <img className="image" src="/img/gallery.svg" alt="back" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
