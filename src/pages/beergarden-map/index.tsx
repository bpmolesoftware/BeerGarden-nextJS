import '@/styles/global.scss';

import CloseGardens from '@/app/components/CloseGardens';
import MapGoogle from '@/app/components/MapGoogle';
import ShowClosesGardens from '@/app/components/ShowClosesGardens';
import { useEffect, useState } from 'react';

const Index = () => {

  const [showClosest , setShowClosest] = useState(0)

  let width : any;

  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    window.addEventListener('resize', handleResize)
  }

  function handleResize(){
    if(width > 768){
      setShowClosest(0)
    }else{
      setShowClosest(100)
    }
  }

  return (
    <div>
      <CloseGardens showClosest={showClosest} setShowClosest={setShowClosest} width={width} />
      <MapGoogle />
      <ShowClosesGardens setShowClosest={setShowClosest} showClosest={showClosest}/>
    </div>
  );
};

export default Index;
