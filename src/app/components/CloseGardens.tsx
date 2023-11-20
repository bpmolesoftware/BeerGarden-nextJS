import { useRouter } from 'next/router';
import React, {  useState } from 'react';

import { calculateDistance } from '../../utils/DistanceCalculator';

const CloseGardens = ({showClosest, setShowClosest } : any) => {

  const styles = { 
    transform: `translateY(${showClosest}%)` 
  }

  const router = useRouter();

  const data = calculateDistance();

  const [currentPoint, setCurrentPoint] = useState(0);

  function handleOnClick(e: any) {
    router.push(`/${e}`);
  }

  function showIndex(direction: string) {
    switch (direction) {
      case 'down':
        setCurrentPoint(currentPoint + 5);
        break;
      case 'up':
        setCurrentPoint(currentPoint - 5);
        break;
      default:
        break;
    }
  }

  function handleCloseGardens(){
    setShowClosest(100);
  }

  return (
    <div className="close-gardens" style={styles}>
      <div className="close-button">
        <div className="close-button" ><button onClick={() => handleCloseGardens()}>Show Beergarden Map</button></div>
      </div>
      {data
        .slice(currentPoint, currentPoint + 5)
        .sort((a, b) => a.distance - b.distance)
        .map((data) => (
          <div className="garden" onClick={() => handleOnClick(data.id)}>
            <div className="name">{data.title}</div>
            <div className="distance">
              <img
                className="distance-icon"
                src="img/small-location.svg"
                alt=""
              />
              {data.distance > 1000
                ? `${(data.distance / 1000).toFixed(2)} km`
                : `${data.distance.toFixed()} m`}
            </div>
          </div>
        ))}
      {currentPoint > 0 && (
        <button
          type="button"
          className="close-gardens__button close-gardens__button--prev"
          onClick={() => showIndex('up')}
        >
          &#x2191;
        </button>
      )}
      {currentPoint + 5 <= data.length && (
        <button
          type="button"
          className="close-gardens__button close-gardens__button--next"
          onClick={() => showIndex('down')}
        >
          &#x2193;
        </button>
      )}
    </div>
  );
};

export default CloseGardens;
