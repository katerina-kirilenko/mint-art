import React, { ReactElement } from 'react';
import Header from 'components/blocks/Header';
import { useClasses } from './styles';

const MainPage = (): ReactElement => {
  const classes = useClasses();

  return (
    <div className="main-page">
      <Header />
      <h2>Mint art</h2>
      <p>main page</p>
    </div>
  );
};

export default MainPage;
