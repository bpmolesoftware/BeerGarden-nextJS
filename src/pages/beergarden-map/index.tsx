import '@/styles/global.scss';

import { useState } from 'react';

import CloseGardens from '@/components/CloseGardens';
import MapGoogle from '@/components/MapGoogle';
import ShowClosesGardens from '@/components/ShowClosesGardens';

const Index = () => {
  const [showClosest, setShowClosest] = useState(0);

  let width: any;

  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    window.addEventListener('resize', handleResize);
    console.log(window.location.host);
  }

  function handleResize() {
    if (width > 768) {
      setShowClosest(0);
    } else {
      setShowClosest(100);
    }
  }

  return (
    <div>
      <CloseGardens
        showClosest={showClosest}
        setShowClosest={setShowClosest}
        width={width}
      />
      <MapGoogle />
      <ShowClosesGardens
        setShowClosest={setShowClosest}
        showClosest={showClosest}
      />
    </div>
  );
};

export default Index;
