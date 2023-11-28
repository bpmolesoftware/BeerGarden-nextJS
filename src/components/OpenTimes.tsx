import React from 'react';

const OpenTimes = ({ openingtimes }: any) => {
  return (
    <div className="opentimes-component">
      <div className="opentimes">
        <div className="opentimes__icon">
          <img src="/img/opentimes.svg" alt="open-times" />
        </div>
        <div className="title">Offnungszeiten</div>
      </div>
      <div className="info">{openingtimes}</div>
    </div>
  );
};

export default OpenTimes;
