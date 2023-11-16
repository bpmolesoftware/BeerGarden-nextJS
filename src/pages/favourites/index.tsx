import '@/styles/global.scss';

import React, { useEffect, useState } from 'react';

import Favourite from '@/app/components/Favourite';
import Header from '@/app/components/Header';
import { getFavourites } from '@/utils/apiDataUtil';

const index = () => {

  const [favouritesArray, setFavouritesArray]= useState();

  useEffect(() => {
    setFavouritesArray(getFavourites())
  },[])

  return (
    <div>
      <Header />
      <div className="favourites">
        {favouritesArray != null && favouritesArray.length != 0
          ? favouritesArray.map((favourite) => {
            return <Favourite id={favourite.id} title={favourite.title} setFavouritesArray={setFavouritesArray} />;
          })
          : <div className='no-favourites'><div className="no-favourites__notification">No favourites added!</div></div> }
      </div>
    </div>
  );
};

export default index;
