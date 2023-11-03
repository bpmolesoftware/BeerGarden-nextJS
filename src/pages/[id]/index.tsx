import '@/styles/global.scss';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '@/app/components/Header';
import MapGarden from '@/app/components/MapGarden';

const Index = () => {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const props = {
    id,
  };

  const [address, setAddress] = useState();
  const [openTime, setOpenTime] = useState();
  const [title, setTitle] = useState();

  console.log(`opentime ${openTime}`);

  useEffect(() => {
    fetch(`http://localhost:3000/api/search/${props.id}`).then((response) =>
      response.json().then((data) => {
        setTitle(data.results[0].title);
        setAddress(data.results[0].address);
        setOpenTime(data.results[0].openingtimes);
      }),
    );
  }, [props.id]);

  return (
    <div>
      <Header />
      <div className="garden-data">
        <p className="detail">{title}</p>
        <p className="detail">{openTime}</p>
        <p className="detail">{address}</p>
      </div>
      <MapGarden />
    </div>
  );
};

export default Index;
