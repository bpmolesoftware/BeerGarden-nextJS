import { useRouter } from 'next/router';
import React from 'react';

const gardens = [
  {
    name: 'Lorem, ipsum.',
    distance: 180,
    img: '/img/close-bgarden-back.svg',
  },
  {
    name: 'Lorem, ipsum.',
    distance: 2320,
    img: '/img/close-bgarden-back.svg',
  },
  {
    name: 'Lorem, ipsum.',
    distance: 1320,
    img: '/img/close-bgarden-back.svg',
  },
  {
    name: 'Lorem, ipsum.',
    distance: 420,
    img: '/img/close-bgarden-back.svg',
  },
  {
    name: 'Lorem, ipsum.',
    distance: 220,
    img: '/img/close-bgarden-back.svg',
  },
];

const CloseGardens = () => {
  const router = useRouter();

  function handleOnClick(e: any) {
    router.push(`http://localhost:3000/${e}`);
  }
  return (
    <div className="close-gardens">
      {gardens
        .sort((a, b) => a.distance - b.distance)
        .map((garden) => (
          <div
            className="garden"
            style={{ backgroundImage: `url(${garden.img})` }}
            onClick={() => handleOnClick(garden.id)}
          >
            <div className="name">{garden.name}</div>
            <div className="distance">
              <img
                className="distance-icon"
                src="img/small-location.svg"
                alt=""
              />
              {garden.distance} m{' '}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CloseGardens;
