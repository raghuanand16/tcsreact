import React from 'react';
import {render} from 'react-dom';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'redux';
import {logger} from 'redux-logger';

import reducer from './reducer';
import rootSaga from './saga';
import App from './component/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);