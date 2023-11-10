'use client';

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import mapStyles from '@/styles/js/mapStyles';

const containerStyles = {
  width: '45%',
  height: '40%',
};
const MapGarden = ({ coords }: any) => {
  const icon = 'img/beer-marker.svg';

  const latLng = coords.split(',');

  const lat = latLng[0];
  const lng = latLng[1];

  const mapLat = parseFloat(lat);
  const mapLng = parseFloat(lng);

  return (
    <Map
      containerStyle={containerStyles}
      styles={mapStyles.light}
      google={window.google}
      zoom={14}
      center={{
        lat: mapLat,
        lng: mapLng,
      }}
    >
      <Marker
        position={{
          lat,
          lng,
        }}
        icon={icon}
      />
    </Map>
  );
};

// Here we use GoogleApiWrapper() that we import of the package
export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
})(MapGarden);
