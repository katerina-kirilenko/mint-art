import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from 'store/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['isAutorizedUser'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
