import '@/styles/global.scss';

import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  function redirectToMap() {
    router.push(`/beergarden-map`);
  }

  return <div className="home" onClick={() => redirectToMap()} />;
};

export default Index;
