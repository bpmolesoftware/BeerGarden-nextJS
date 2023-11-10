import { useRouter } from 'next/router';
import React from 'react';

const favoriteData: any = [];

const Header = ({ id, title }: any) => {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  function handleHome(): void {
    router.push(`/`);
  }

  function goToFavaurites(): void {
    router.push(`/favourites`);
  }
  function addToFavaurites(): void {
    console.log('Add to favourites');
  }

  function addToFavorites() {
    favoriteData.push({ id: `${id}`, title: `${title}` });
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
    }
  }

  return (
<<<<<<< Updated upstream
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
      </div>
      <div className="header__gallery" onClick={() => goToFavaurites()}>
        <img className="image" src="/img/gallery.svg" alt="back" />
        <p className="header__title">Favourites</p>
=======
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
        <div
          className="header__add-to-favourites"
          onClick={() => addToFavaurites()}
        >
          <img className="header__add-to-fav" src="/img/fav.svg" alt="back" />
          <p className="header__title">Add to favourites</p>
        </div>
        <div className="header__favourites" onClick={() => goToFavaurites()}>
          <img className="image" src="/img/gallery.svg" alt="back" />
          <p className="header__title">Favourites</p>
        </div>
>>>>>>> Stashed changes
      </div>
      <div className="header-mobile">
        <div className="header-mobile__back">
          <div className="header__back" onClick={() => handleBack()}>
            <img className="image" src="/img/back-arrow.svg" alt="back" />
            <p className="header__title">Back </p>
          </div>
        </div>
        <div className="header-mobile__bottom">
          <div className="header__home" onClick={() => handleHome()}>
            <img className="image" src="/img/home.svg" alt="back" />
            <p className="header__title">Home </p>
          </div>
          <div
            className="header__add-to-favourites"
            onClick={() => addToFavaurites()}
          >
            <img className="header__add-to-fav" src="/img/fav.svg" alt="back" />
            <p className="header__title">Add to favourites</p>
          </div>
          <div className="header__favourites" onClick={() => goToFavaurites()}>
            <img className="image" src="/img/gallery.svg" alt="back" />
            <p className="header__title">Favourites</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
