'use client';

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useRouter } from 'next/router';

import mapStyles from '@/styles/js/mapStyles';
import { getCoordsAndId, getGeolocation } from '@/utils/apiDataUtil';

import SearchBar from './SearchBar';

let host: any;
if (typeof window !== 'undefined') {
  host = window.location.host;
}

const style = {
  width: '100%',
  height: '100%',
};
const MapGoogle = () => {
  const icon = '/img/beer-marker.svg';

  const geoLocation = getGeolocation();
  const coordsAndId = getCoordsAndId();

  const router = useRouter();

  function handleOnClick(id: any, title: any) {
    router.push({
      pathname: `http://${host}/${id}`,
      query: { id, title },
    });
  }

  const iconGeo = '/img/location.svg';

  return (
    <Map
      google={window.google}
      zoom={11}
      style={style}
      styles={mapStyles.light}
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
        icon={iconGeo}
      />

      {coordsAndId.map(function (marker: any) {
        const latNLng = marker.split(',');

        const lat = latNLng[0];
        const lng = latNLng[1];
        const id = latNLng[2];
        const title = latNLng[3];

        return (
          // eslint-disable-next-line react/jsx-key

          <Marker
            position={{
              lat,
              lng,
            }}
            icon={icon}
            onClick={() => handleOnClick(id, title)}
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
