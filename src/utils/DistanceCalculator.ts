import { getCoordsAndId, getGeolocation } from '@/utils/apiDataUtil';

const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
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

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return distance;
};

const calculateDistance = () => {
  const distances = [];
  const coords = getCoordsAndId();
  const currentLocation = getGeolocation();

  coords.map((brewery: any) => {
    const [lat, lng, id, title] = brewery.split(',');
    const distance = haversineDistance(
      currentLocation.coordinates.lat,
      currentLocation.coordinates.lng,
      parseFloat(lat),
      parseFloat(lng),
    );

    const breweryObject: any = {
      id,
      title,
      distance,
    };
    distances.push(breweryObject);
  });

  return distances.sort((a, b) => a.distance - b.distance);
};
// eslint-disable-next-line @typescript-eslint/no-use-before-define
export { calculateDistance };
