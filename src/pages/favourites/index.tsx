import React from 'react';

import Header from '@/app/components/Header';

const index = () => {
  let favorite: any;
  let id: string;
  let title: string;

  if (typeof window !== 'undefined') {
    favorite = localStorage.getItem('favorite');
    console.log('favorite from local storage: ', JSON.parse(favorite));
  }

  return (
    <div>
      <Header />
      Currently there are no faveourites!
    </div>
  );
};

export default index;
