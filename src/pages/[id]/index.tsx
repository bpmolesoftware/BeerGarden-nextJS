import '@/styles/global.scss';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Address from '@/app/components/Address';
import CommentForm from '@/app/components/CommentForm';
import GardenDetails from '@/app/components/GardenDetails';
import Header from '@/app/components/Header';
import MapGarden from '@/app/components/MapGarden';
import OpenTimes from '@/app/components/OpenTimes';
import ShowComments from '@/app/components/ShowComments';
import Weather from '@/app/components/Weather';

const data = {
  id: 1,
  title: 'Alte Villa',
  description: 'Das Pr',
  address: 'Alte Villa Seestra',
  openingtimes:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est.',
  kids: 'Spielplatz gut einsehbar, viel Auslauf',
  beer: 'Kaltenberg',
  tipp: 'Hochseilakt\r\n\r\nIm Freizeitgel',
  coordinates: '48.026511,11.097988',
};

const Index = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const props = {
    id,
  };

  console.log(data.title);

  const [title, setTitle] = useState();
  const [openTimes, setOpenTimes] = useState();
  const [coords, setCoords] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/search/${props.id}`).then((response) =>
      response.json().then((data) => {
        // eslint-disable-next-line array-callback-return
        data.results.map((e) => {
          setTitle(e.title);
          setOpenTimes(e.openTimes);
          setCoords(e.coordinates);
          setAddress(e.address);
          setDescription(e.description);
        });
      }),
    );
  }, [props.id]);

  return (
    <div className="page-details">
      <Header />
      <div className="details-container">
        <MapGarden coords={data.coordinates} />
        <GardenDetails title={title} description={description} />
        <OpenTimes openingtimes={openTimes} />
        <Address address={address} />
      </div>
      <Weather />
      <CommentForm />
      <ShowComments />
    </div>
  );
};

export default Index;
