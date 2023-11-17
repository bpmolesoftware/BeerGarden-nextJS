import '@/styles/global.scss';

import CloseGardens from '@/app/components/CloseGardens';
import MapGoogle from '@/app/components/MapGoogle';
import ShowClosesGardens from '@/app/components/ShowClosesGardens';
import { useState } from 'react';

const Index = () => {

  const [showClosest , setShowClosest] = useState(0)

  let width  :any;

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }

  function handleResize(){
    width  = window.innerWidth;

    let widthInt = parseInt(width);
    console.log("width int :  " + widthInt)
    
    if(widthInt > 768){
      setShowClosest(0)
      console.log(width)
    }
    if(widthInt < 768){
      setShowClosest(100)
      console.log(width)
    }
  }


  return (
    <div>
      <CloseGardens showClosest={showClosest} setShowClosest={setShowClosest}/>
      <MapGoogle />
      <ShowClosesGardens setShowClosest={setShowClosest} showClosest={showClosest}/>
    </div>
  );
};

export default Index;
