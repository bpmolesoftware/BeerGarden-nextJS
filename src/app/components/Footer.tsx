import { addToFavorites } from '@/utils/apiDataUtil';
import router from 'next/router';
import React, { useEffect, useState } from 'react'
import AddtoFavModal from './AddtoFavModal';

const Footer = ({id , title} : any) => {

  const[isFavourites , setIsFavourites] = useState(false);

  useEffect(() =>{
    if(router.asPath == "/favourites"){
      setIsFavourites(true)
    }else {
      setIsFavourites(false)
    }
  }, [])

  function handleHome(): void {
    router.push(`/beergarden-map`);
  }

  function goToFavaurites(): void {
    router.push(`/favourites`);
  }
  
  function handleAddFavs(): void {
    addToFavorites(id , title , setModal , modal)
  }

  const [modal, setModal] = useState(false);
  
  function toggleModal(): void {
    setModal(!modal);
  }

  return (
    <div className="footer">
          <div className="footer__home" onClick={() => handleHome()}>
            <img className="image" src="/img/home.svg" alt="back" />
            <p className="footer__title">Home</p>
          </div>
          {!isFavourites && <div className="header__navigation--add-to-favourites" onClick={() => handleAddFavs()}>
            <img className="image" src="/img/fav.svg" alt="back" />
            <p className="footer__title">Add to Favourites</p>
          </div>}
          <div className="header__navigation--go-to-favourites" onClick={() => goToFavaurites()}>
            <img className="image" src="/img/gallery.svg" alt="back" />
            <p className="footer__title">Favourites</p>
          </div>
          {modal && <AddtoFavModal title={title} toggle={toggleModal} />}
    </div>
  )
}

export default Footer
