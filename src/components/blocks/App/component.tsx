import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import ThemeProviderWrapper from 'components/wrappers/ThemeProvider';
import MainPage from 'components/pages/MainPage';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <MainPage />
      </ThemeProviderWrapper>
    </Provider>
  );
};

export default App;
