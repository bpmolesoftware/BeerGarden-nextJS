import '@/styles/global.scss';

import React, { useEffect, useState } from 'react';

import Favourite from '@/components/Favourite';
import Header from '@/components/Header';
import { getFavourites } from '@/utils/apiDataUtil';
import Footer from '@/components/Footer';

const index = () => {

  const [favouritesArray, setFavouritesArray]= useState([]);

  useEffect(() => {
    setFavouritesArray(getFavourites())
  },[])

  console.log(favouritesArray);
  
  return (
    <div className='favourites-page'>
      <Header />
      <div className="favourites">
        {favouritesArray != null && favouritesArray.length != 0
          ? favouritesArray.map((favourite) => {
            return <Favourite id={favourite.id} title={favourite.title} setFavouritesArray={setFavouritesArray} />;
          })
          : <div className='no-favourites'><div className="no-favourites__notification">No favourites added!</div></div> }
      </div>
      <Footer/>
    </div>
  );
};

export default index;
