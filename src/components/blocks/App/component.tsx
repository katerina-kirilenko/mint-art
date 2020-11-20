import React, { ReactElement } from 'react';
import ThemeProviderWrapper from 'components/wrappers/ThemeProvider';
import MainPage from 'components/pages/MainPage';

const App = (): ReactElement => {
  return (
    <ThemeProviderWrapper>
      <MainPage />
    </ThemeProviderWrapper>
  );
};

export default App;
