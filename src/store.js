import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import saga from 'store/userData/saga';

import { combineReducers } from 'redux';
import settingsReducer from 'store/settings/reducer';
import authReducer from 'store/auth/reducer';
import userReducer from 'store/userData/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings', 'user'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAutorizedUser'],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(saga);
