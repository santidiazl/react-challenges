import React, { useEffect } from 'react';
import '../styles/_rocket.scss';

const SECONDS_TO_TAKEOFF = 5;
const MS_TO_TAKEOFF = SECONDS_TO_TAKEOFF * 1000;
const FINAL_POSITION_BOTTOM_VAL = 'calc(400px)';

function timeToPositionPercent(startTime) {
  const now = Date.now();
  const timeDiff = now - startTime;

  if (timeDiff >= MS_TO_TAKEOFF) {
    return FINAL_POSITION_BOTTOM_VAL;
  }

  return `calc(300px + ${((timeDiff / MS_TO_TAKEOFF) * 100).toFixed(0)}%)`;
}

function generateEmptyListEls(key, quantity) {
  return [...Array(quantity)].map((_, index) => <li key={`${key}-${index}`} />);
}

export default function RocketCore({ initialLaunchTime }) {
  useEffect(() => {
    console.log('RocketCore was rendered.');
  });

  return (
    <>
      <div
        className="rocket"
        style={{ bottom: timeToPositionPercent(initialLaunchTime) }}
      >
        <div className="rocket__body">
          <div className="rocket__body__main" />
          <div className="rocket__body__fin rocket__body__fin__left" />
          <div className="rocket__body__fin rocket__body__fin__right" />
          <div className="rocket__body__window" />
        </div>
        <div className="rocket__exhaust__flame" />
        <ul className="rocket__exhaust__fumes">
          {generateEmptyListEls('fumes', 9)}
        </ul>
      </div>
      <ul className="stars">{generateEmptyListEls('stars', 7)}</ul>
    </>
  );
}
