import { Marker } from 'google-maps-react';
import { useEffect, useState } from 'react';

type TLocation = {
  loaded: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
};

const Geolocation = () => {
  const [location, setLocation] = useState<TLocation>();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // const onSuccess = (location: {
  //   coords: { latitude: any; longitude: any };
  // }) => {
  //   setLocation({
  //     loaded: true,
  //     coordinates: {
  //       lat: location.coords.latitude,
  //       lng: location.coords.longitude,
  //     },
  //   });
  // };

  // const onError = (error: { error: { code: number; message: string } }) => {
  //   setLocation({
  //     loaded: true,
  //     coordinates: { lat: '', lng: '' },
  //   });
  // };

  const icon = 'img/location-icon.png';

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Marker
      position={{
        lat: location?.coordinates.lat,
        lng: location?.coordinates.lat,
      }}
      icon={icon}
    />
  );
};

export default Geolocation;
