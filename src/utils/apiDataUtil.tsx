import { useEffect, useState } from 'react';

let host: any;
if (typeof window !== 'undefined') {
  host = window.location.host;
}
const getCoordsAndId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [coords, setCoords]: any = useState([]);

  function populateCoords(data: any) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const coords: any[] = [];

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < data.length; index++) {
      coords.push(
        `${data[index].coordinates},${data[index].id},${data[index].title}`,
      );
    }

    setCoords(coords);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(`http://${host}/api/getdata`).then((response) =>
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

const getDataById = async (id: any) => {
  const res = await fetch(`http://${host}/api/search/${id}`);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
};

const getDataBySearch = async (title: any) => {
  const res = await fetch(`http://${host}/api/textSearch/${title}`);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
};

const getComments = async (comment: any) => {
  const res = await fetch(`http://${host}/api/comments/${comment}`);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
};
const getWeather = async () => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max`,
  );

  if (res.ok) {
    const data = await res.json();
    return data;
  }
};

function getFavourites() {
  let favorite: any;

  if (typeof window !== 'undefined') {
    favorite = localStorage.getItem('favorite');
    return JSON.parse(favorite);
  }
}

function addToFavorites(id: any, title: any, setModal: any, modal: any) {
  let favoriteData: any;

  if (typeof window !== 'undefined') {
    favoriteData = JSON.parse(localStorage.getItem('favorite'));
  }
  if (localStorage.getItem('favorite') === null) {
    favoriteData = [];
    favoriteData.push({ id: `${id}`, title: `${title}` });
    localStorage.setItem('favorite', JSON.stringify(favoriteData));
    setModal(!modal);
  } else if (localStorage.getItem('favorite')?.length === 0) {
    favoriteData.push({ id: `${id}`, title: `${title}` });
    localStorage.setItem('favorite', JSON.stringify(favoriteData));
    setModal(!modal);
  } else {
    const found = favoriteData.some((fav: { id: any }) => fav.id === id);
    if (!found) {
      favoriteData.push({ id: `${id}`, title: `${title}` });
      localStorage.setItem('favorite', JSON.stringify(favoriteData));
      setModal(!modal);
    }
  }
}

export {
  addToFavorites,
  getComments,
  getCoordsAndId,
  getDataById,
  getDataBySearch,
  getFavourites,
  getGeolocation,
  getWeather,
};
