import React, { useEffect, useState } from 'react';
import '@/styles/global.scss';
import Favourite from '@/app/components/Favourite';
import Header from '@/app/components/Header';

const index = () => {
  let favorite: any;

  const [favouritesArray, setFavouritesArray] = useState([]);

  function getFavourites() {
    if (typeof window !== 'undefined') {
      favorite = localStorage.getItem('favorite');
      console.log('favorite from local storage: ', JSON.parse(favorite));
      return JSON.parse(favorite);
    }
  }

  useEffect(() => {
    const favourite = getFavourites();

    setFavouritesArray(favourite);
  }, []);

  console.log(favouritesArray);

  return (
    <div>
      <Header />
      <div className="favourites">
        {favouritesArray != null && favouritesArray.length != 0
          ? favouritesArray.map((favourite) => {
            return <Favourite id={favourite.id} title={favourite.title} />;
          })
          : <div>No favourites added!</div> }
      </div>
    </div>
  );
};

export default index;
