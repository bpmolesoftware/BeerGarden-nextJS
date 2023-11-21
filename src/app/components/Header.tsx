import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AddtoFavModal from './AddtoFavModal';
import { addToFavorites } from '@/utils/apiDataUtil';

let favoriteData: any;
if (typeof window !== 'undefined') {
  favoriteData = JSON.parse(localStorage.getItem('favorite'));
}

const Header = ({ id, title , setModal , modal}: any) => {
  const router = useRouter();

  const[isFavourites , setIsFavourites] = useState(false);


  useEffect(() =>{
    if(router.asPath == "/favourites"){
      setIsFavourites(true)
    }else {
      setIsFavourites(false)
    }
  }, [])

  function handleBack() {
    router.back();
  }

  function handleHome(): void {
    router.push(`/beergarden-map`);
  }

  function goToFavaurites(): void {
    router.push(`/favourites`);
  }

  function handleAddFavs(): void {
    addToFavorites(id , title , setModal , modal)
  }

  
  function toggleModal(): void {
    setModal(!modal);
  }

  return (
    <>
      <div className="header">
        <div className="header__back">
          <div className="header__back-button" onClick={() => handleBack()}>
            <img className="image" src="/img/back-arrow.svg" alt="back" />
            <p className="header__title">Back </p>
          </div>
        </div>
        <div className="header__navigation hidden">
          <div className="header__home" onClick={() => handleHome()}>
            <img className="image" src="/img/home.svg" alt="back" />
            <p className="header__title">Home</p>
          </div>
          {!isFavourites && <div className="header__navigation--add-to-favourites" onClick={() => handleAddFavs()}>
            <img className="image" src="/img/fav.svg" alt="back" />
            <p className="header__title">Add to Favourites</p>
          </div>}
          <div className="header__navigation--go-to-favourites" onClick={() => goToFavaurites()}>
            <img className="image" src="/img/gallery.svg" alt="back" />
            <p className="header__title">Favourites</p>
          </div>
        </div>
      </div>
      {modal && <AddtoFavModal title={title} toggle={toggleModal} />}
      
    </>
  );
};

export default Header;
