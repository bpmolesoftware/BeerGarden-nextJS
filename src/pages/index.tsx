import '@/styles/global.scss';

import CloseGardens from '@/app/components/CloseGardens';
import MapGoogle from '@/app/components/MapGoogle';
import DistanceCalculator from '@/app/components/DistanceCalculator';

const Index = () => {
  return (
    <div>
      <CloseGardens />
      <MapGoogle />
      <DistanceCalculator />
    </div>
  );
};

export default Index;
