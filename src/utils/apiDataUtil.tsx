import { useEffect, useState } from 'react';

const getCoordsAndId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [coords, setCoords]: any = useState([]);

  function populateCoords(data: any) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const coords: any[] = [];

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < data.length; index++) {
      coords.push(`${data[index].coordinates},${data[index].id}`);
    }

    setCoords(coords);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/getdata`).then((response) =>
      response.json().then((data) => {
        populateCoords(data.results);
        // populateAdvice(data.slip.id , data.slip.advice)
      }),
    );
  }, []);

  return coords;
};

const getGeolocation = () => {
  const [geoLocation, setGeoLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoLocation({
        loaded: true,
        coordinates: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }, []);

  return geoLocation;
};

const getIdByUrl = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [id, setId] = useState('');

  setId(window.location.href);

  return id;
};

export { getCoordsAndId, getGeolocation, getIdByUrl };
