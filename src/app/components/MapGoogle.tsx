'use client';

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useEffect, useState } from 'react';

const mapStyles = {
  width: '100%',
  height: '70%',
};

const features = [
  {
    lat: 47.972215,
    lng: 11.476515,
    icon: 'img/map_tag_.png',
  },
  {
    lat: 48.163617,
    lng: 11.535476,
    icon: 'img/map_tag_.png',
  },
];

function getData(setCoords: any) {
  fetch(`http://localhost:3000/api/getdata`).then((response) =>
    response.json().then((data) => {
      console.log(data.results);
      populateCoords(data.results, setCoords);
      // populateAdvice(data.slip.id , data.slip.advice)
    }),
  );
}

function populateCoords(data: any, setCoords: any) {
  const coords: any[] = [];

  for (let index = 0; index < data.length; index++) {
    coords.push(data[index].coordinates);
  }

  setCoords(coords);
}

const MapGoogle = () => {
  const icon = 'img/map_tag_.png';

  const [geoLocation, setGeoLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const [coords, setCoords] = useState([]);

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
    return () => getData(setCoords);
  }, []);

  return (
    <Map
      google={window.google}
      zoom={11}
      style={mapStyles}
      initialCenter={{
        lat: 48.137154,
        lng: 11.576124,
      }}
    >
      <Marker
        position={{
          lat: geoLocation.coordinates.lat,
          lng: geoLocation.coordinates.lng,
        }}
      />

      {coords.map(function (marker: any) {
        const latNLng = marker.split(',');

        const lat = latNLng[0];
        const lng = latNLng[1];

        console.log(marker);

        return (
          <Marker
            position={{
              lat,
              lng,
            }}
            icon={icon}
          />
        );
      })}
    </Map>
  );
};

// Here we use GoogleApiWrapper() that we import of the package
export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
})(MapGoogle);
