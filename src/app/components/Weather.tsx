import React, { useEffect, useState } from 'react';

import WeatherWeekDay from './WeatherWeekDay';

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  let weekdays: any[] = [];
  let temperature: never[] = [];
  let weatherCode: never[] = [];

  const getWeather = async (): Promise<void> => {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=48.1374&longitude=11.5755&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max`,
    );

    if (res.ok) {
      const data = await res.json();
      console.log(data);

      setWeatherData(data);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  weekdays = weatherData?.daily?.time;
  temperature = weatherData.daily?.temperature_2m_max;
  weatherCode = weatherData?.daily?.weather_code;

  console.log(temperature);

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
        <div className="weather__current--temp">
          {weatherData?.current?.temperature_2m.toFixed(0)}&#xb0;
        </div>
      </div>
      <div className="weather__next-five-days">
        {temperature?.map((element: any, index: number) => {
          if (index < 5) {
            return (
              <WeatherWeekDay
                temp={element}
                time={weekdays[index]}
                code={weatherCode[index]}
              />
            );
          }
        })}
      </div>
      <div className="weather__next-five-days mobile">
        {temperature?.map((element: any, index: number) => {
          if (index < 3) {
            return (
              <WeatherWeekDay
                temp={element}
                time={weekdays[index]}
                code={weatherCode[index]}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Weather;
