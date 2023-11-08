'use client';

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useRouter } from 'next/router';

import { getCoordsAndId, getGeolocation } from '@/utils/apiDataUtil';

import SearchBar from './SearchBar';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const MapGoogle = () => {
  const icon = 'img/beer-marker.svg';

  const geoLocation = getGeolocation();
  const coordsAndId = getCoordsAndId();

  const router = useRouter();

  function handleOnClick(id: any) {
    router.push({
      pathname: `http://localhost:3000/${id}`,
      query: { id },
    });
  }

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
      <SearchBar />
      <Marker
        position={{
          lat: geoLocation.coordinates.lat,
          lng: geoLocation.coordinates.lng,
        }}
      />

      {coordsAndId.map(function (marker: any) {
        const latNLng = marker.split(',');

        const lat = latNLng[0];
        const lng = latNLng[1];
        const id = latNLng[2];

        return (
          // eslint-disable-next-line react/jsx-key

          <Marker
            position={{
              lat,
              lng,
            }}
            icon={icon}
            onClick={() => handleOnClick(id)}
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
