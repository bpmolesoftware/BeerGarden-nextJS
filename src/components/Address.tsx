import React from 'react';

const Address = ({ address }: any) => {
  return (
    <div className="address-component">
      <div className="address">
        <div className="address__icon">
          <img src="/img/address.svg" alt="Address" />
        </div>
        <div className="title">Address / Reservierung</div>
      </div>
      <div className="info">{address}</div>
    </div>
  );
};

export default Address;
