import { useEffect, useState } from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  const [launchTime, triggerRerender] = useState(Date.now());

  useEffect(() => {
    console.log('LaunchPad was rendered');
    setInterval(() => {
      triggerRerender(Date.now());
    }, 500);
  }, [launchTime]);

  return (
    <div className="launchpad">
      <ClassRocket />
    </div>
  );
}
