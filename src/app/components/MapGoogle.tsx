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

const MapGoogle = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
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
          lat: location.coordinates.lat,
          lng: location.coordinates.lng,
        }}
      />

      {features.map(function (marker) {
        return (
          <Marker
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            icon={marker.icon}
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
