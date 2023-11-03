import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
  const router = useRouter();

  function handleBack() {
    router.push(`http://localhost:3000/`);
  }

  return (
    <div className="header">
      <div className="header__back" onClick={() => handleBack()}>
        <img className="image" src="/img/back-arrow.svg" alt="back" />
        <p className="title">Back </p>
      </div>
      <div className="header__home">
        <img className="image" src="/img/home.svg" alt="back" />
        <p className="title">Home </p>
      </div>
      <div className="header__favourites">
        <img className="image" src="/img/fav.svg" alt="back" />
        <p className="title">Add to favourites</p>
      </div>
      <div className="header__gallery">
        <img className="image" src="/img/gallery.svg" alt="back" />
        <p className="title">Gallery</p>
      </div>
      <div className="header__gallery">
        <img className="image" src="/img/menu.svg" alt="back" />
        <p className="title">Menu</p>
      </div>
    </div>
  );
};

export default Header;
