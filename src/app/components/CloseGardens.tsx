import { useRouter } from 'next/router';
import React from 'react';

import { calculateDistance } from '../../utils/DistanceCalculator';

const CloseGardens = () => {
  const router = useRouter();

  const data = calculateDistance();
  console.log(data);

  // const distanceText =
  // distance > 1000
  //   ? `${(distance / 1000).toFixed(2)} km`
  //   : `${distance.toFixed(2)} m`;

  const icon = '/img/close-bgarden-back.svg';

  function handleOnClick(e: any) {
    router.push(`http://localhost:3000/${e}`);
  }
  return (
    <div className="close-gardens">
      {data
        .slice(0, 4)
        .sort((a, b) => a.distance - b.distance)
        .map((data) => (
          <div
            className="garden"
            style={{ backgroundImage: `url(${icon})` }}
            onClick={() => handleOnClick(data.id)}
          >
            <div className="name">{data.title}</div>
            <div className="distance">
              <img
                className="distance-icon"
                src="img/small-location.svg"
                alt=""
              />
              {data.distance > 1000
                ? `${(data.distance / 1000).toFixed(2)} km`
                : `${data.distance.toFixed(2)} m`}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CloseGardens;
