import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';

import { getCoordsAndId, getGeolocation } from '@/utils/apiDataUtil';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const DistanceCalculator = ({ google }) => {
  const coords = getCoordsAndId();
  const currentLocation = getGeolocation();

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const rad = (x) => x * (Math.PI / 180);

    const R = 6378137; // Earth's radius in meters
    const dLat = rad(lat2 - lat1);
    const dLong = rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) *
        Math.cos(rad(lat2)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  return (
    <div>
      <h1>Distance Calculator</h1>
      <Map
        google={google}
        initialCenter={{
          lat: 48.137154, // Munich's latitude
          lng: 11.576124, // Munich's longitude
        }}
        zoom={12}
      >
        {/* Markers for current location and breweries */}
        <Marker
          position={{
            lat: currentLocation.coordinates.lat,
            lng: currentLocation.coordinates.lng,
          }}
          name="Your Location"
        />
        {coords.map((brewery, index) => {
          const [lat, lng, id] = brewery.split(',');
          const distance = haversineDistance(
            currentLocation.coordinates.lat,
            currentLocation.coordinates.lng,
            parseFloat(lat),
            parseFloat(lng),
          );
          return (
            <Marker
              key={id}
              position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
              name={`Brewery ${index + 1}`}
              label={`Distance: ${distance.toFixed(2)} meters`}
            />
          );
        })}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(DistanceCalculator);
