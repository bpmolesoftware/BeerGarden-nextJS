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

  function addToFavorites() {
    favoriteData.push({ id: `${id}`, title: `${title}` });
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
    }
  }

  return (
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
      </div>
      <div className="header__gallery">
        <img className="image" src="/img/menu.svg" alt="back" />
        <p className="header__title">Menu</p>
      </div>
    </div>
  );
};

export default Header;
