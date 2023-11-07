import React, { useEffect, useState } from 'react';

type WeekdayData = {
  name: string;
  icon: string;
  temp: string;
};

const Weather = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max`,
    ).then((response) =>
      response.json().then((data) => {
        // eslint-disable-next-line array-callback-return
        setData(data);
      }),
    );
  }, []);

  return (
    <div className="weather">
      <div className="weather__title">
        <img src="/img/sun.svg" alt="sun" />
        Weather
      </div>
      <div className="weather__current">
        <div className="weather__current--cityanddescription">
          <div className="city">Munich</div>
          <div className="weather__current--description">Scatered Clouds</div>
        </div>
        <div className="weather__current--icon">
          <img src="/img/clouds.svg" alt="clouds" className="icon" />
        </div>
        <div className="weather__current--temp">20&#xb0;</div>
      </div>
      <div className="weather__next-five-days">
        <div className="day">
          <div className="day__name">Monday</div>
          <div className="day__icon">
            <img src="/img/clouds.svg" alt="clouds" className="icon" />
          </div>
          <div className="day__temp">20&#xb0;</div>
        </div>
        <div className="day">
          <div className="day__name">Monday</div>
          <div className="day__icon">
            <img src="/img/clouds.svg" alt="clouds" className="icon" />
          </div>
          <div className="day__temp">20&#xb0;</div>
        </div>
        <div className="day">
          <div className="day__name">Monday</div>
          <div className="day__icon">
            <img src="/img/clouds.svg" alt="clouds" className="icon" />
          </div>
          <div className="day__temp">20&#xb0;</div>
        </div>
        <div className="day">
          <div className="day__name">Monday</div>
          <div className="day__icon">
            <img src="/img/clouds.svg" alt="clouds" className="icon" />
          </div>
          <div className="day__temp">20&#xb0;</div>
        </div>
        <div className="day">
          <div className="day__name">Monday</div>
          <div className="day__icon">
            <img src="/img/clouds.svg" alt="clouds" className="icon" />
          </div>
          <div className="day__temp">20&#xb0;</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
