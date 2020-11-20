import React, { ReactElement } from 'react';
import { useClasses } from './styles';

const MainPage = (): ReactElement => {
  const classes = useClasses();

  return (
    <div className="main-page">
      <h2>Mint art</h2>
      <p>main page</p>
    </div>
  );
};

export default MainPage;
