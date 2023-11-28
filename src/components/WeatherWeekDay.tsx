import React from 'react';

const WeatherWeekDay = ({ time, temp}: any) => {
  const gsDayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const d = new Date(time);
  const dayName = gsDayNames[d.getDay()];

  return (
    <div className="day">
      <div className="day__name">{dayName}</div>
      <div className="day__temp">{temp.toFixed(0)}&#xb0;</div>
    </div>
  );
};

export default WeatherWeekDay;
