import React, {
  useState,
  Component,
  memo,
  useEffect,
  PureComponent,
} from 'react';
import { shallowEqualObjects as _isEqual } from 'shallow-equal';
import RocketCore from './RocketCore';

// Un-memoized Rocket will re-render because parent component (LaunchPad) is triggering a re-render every 500 ms
// And therefore a re-render of all its ancestor components
// Even though Rocket's own state and props stays the same

// export const FunctionalRocket = () => {
//   const [initialLaunchTime] = useState(Date.now());

//   return <RocketCore initialLaunchTime={initialLaunchTime} />;
// };

// To avoid this, wrap around the memo function (for functional components)
// Which will prevent a re-render if props are the same
// In this case they are because no props are being passed to the Rocket
// RocketCore will also just be rendered once as a result

export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());
  useEffect(() => {
    console.log('FunctionalRocket was rendered.');
  });
  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

// For class components, to prevent re-render when props remain the same
// If extending Component, using the shouldComponentUpdate method and returning false
// IF previous props != next props
// Or, preferably, extending the PureComponent class instead

export class ClassRocket extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log('nextProps = ', nextProps, 'this.props = ');
  //   console.log(_isEqual(nextProps, this.props));
  //   return !_isEqual(nextProps, this.props);
  // }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
