import React, { useEffect, useState } from 'react';

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
      {favouritesArray.length == 0
        ? 'No favourites added!'
        : favouritesArray.map((favourite) => {
            return <Favourite id={favourite.id} title={favourite.title} />;
          })}
    </div>
  );
};

export default index;
