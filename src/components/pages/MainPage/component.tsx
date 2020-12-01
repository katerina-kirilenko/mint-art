import React, { ReactElement } from 'react';
import Header from 'components/blocks/Header';

const MainPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <h2>Mint art</h2>
      <p>main page</p>
    </div>
  );
};

export default MainPage;
