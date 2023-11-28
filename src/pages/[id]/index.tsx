import '@/styles/global.scss';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Address from '@/components/Address';
import CommentForm from '@/components/CommentForm';
import Footer from '@/components/Footer';
import GardenDetails from '@/components/GardenDetails';
import Header from '@/components/Header';
import MapGarden from '@/components/MapGarden';
import OpenTimes from '@/components/OpenTimes';
import ShowComments from '@/components/ShowComments';
import Weather from '@/components/Weather';

let host: any;
if (typeof window !== 'undefined') {
  host = window.location.host;
}

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
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(`http://${host}/api/search/${props.id}`).then((response) =>
      response.json().then((data: any) => {
        // eslint-disable-next-line array-callback-return
        data.results?.map((e: any) => {
          setTitle(e.title);
          setOpenTimes(e.openingtimes);
          setAddress(e.address);
          setDescription(e.description);
          setCoords(e.coordinates);
        });
      }),
    );
  }, [props.id]);

  return (
    <div className="page-details">
      <Header id={props.id} title={title} setModal={setModal} modal={modal}/>
      <div className="details-container">
        <MapGarden coords={coords} />
        <GardenDetails title={title} description={description} />
        <OpenTimes openingtimes={openTimes} />
        <Address address={address} />
      </div>
      <Weather />
      <CommentForm id={props.id} />
      <ShowComments id={props.id} />
      <Footer id={props.id} title={title} setModal={setModal} modal={modal}/>
    </div>
  );
};

export default Index;
