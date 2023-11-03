import '@/styles/global.scss';

import CloseGardens from '@/app/components/CloseGardens';
import MapGoogle from '@/app/components/MapGoogle';

const Index = () => {
  return (
    <div>
      <CloseGardens />
      <MapGoogle />
      {/* <DistanceCalculator /> */}
    </div>
  );
};

export default Index;
