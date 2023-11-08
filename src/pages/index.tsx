import '@/styles/global.scss';

import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  function redirectToMap() {
    router.push(`/beergarden-map`);
  }

  return (
    <div className="home">
      <img
        className="home__image"
        src="/img/home-background.svg"
        alt=""
        onClick={() => redirectToMap()}
      />
    </div>
  );
};

export default Index;
