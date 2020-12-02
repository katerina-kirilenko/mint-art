import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
import ThemeProviderWrapper from 'components/wrappers/ThemeProvider';
import MainPage from 'components/pages/MainPage';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProviderWrapper>
          <MainPage />
        </ThemeProviderWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;
