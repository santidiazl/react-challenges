import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';

const CoreLayout = ({ children, history }) => {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
};

export default CoreLayout;
