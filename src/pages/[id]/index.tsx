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

const Index = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const props = {
    id,
  };

  const [title, setTitle] = useState('');
  const [openTimes, setOpenTimes] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [coords, setCoords] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/search/${props.id}`).then((response) =>
      response.json().then((data) => {
        // eslint-disable-next-line array-callback-return
        data.results.map((e: any) => {
          setTitle(e.title);
          setOpenTimes(e.openTimes);
          setAddress(e.address);
          setDescription(e.description);
          setCoords(e.coordinates);
        });
      }),
    );
  }, [props.id]);

  return (
    <div className="page-details">
      <Header />
      <div className="details-container">
        <MapGarden coords={coords} />
        <GardenDetails title={title} description={description} />
        <OpenTimes openingtimes={openTimes} />
        <Address address={address} />
      </div>
      <Weather />
      <CommentForm id={props.id} />
      <ShowComments />
    </div>
  );
};

export default Index;
