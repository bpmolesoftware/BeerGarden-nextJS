'use client';

import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const mapStyles = {
  width: '50%',
  height: '50%',
};
const gardens = {
  name: 'Alte Villa',
  openingtime: 180,
  address: 'This is the address of the garden',
  coords: '48.086039,11.200494',
  stars: 4,
};

const MapGarden = () => {
  const icon = 'img/map_tag_.png';

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const props = {
    id,
  };

  const [coords, setCoords]: any = useState('');
  const [address, setAddress] = useState();
  const [openTime, setOpenTime] = useState();
  const [title, setTitle] = useState();

  const latLng = coords.split(',');

  const lat = latLng[0];
  const lng = latLng[1];

  const mapLat = parseFloat(lat);
  const mapLng = parseFloat(lng);

  console.log(title);

  console.log(props.id);
  console.log(coords);

  useEffect(() => {
    fetch(`http://localhost:3000/api/search/${props.id}`).then((response) =>
      response.json().then((data) => {
        setCoords(data.results[0].coordinates);
        setTitle(data.results[0].title);
        setAddress(data.results[0].address);
        setOpenTime(data.results[0].openingtime);
      }),
    );
  }, [props.id]);

  return (
    <Map
      google={window.google}
      zoom={14}
      style={mapStyles}
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
