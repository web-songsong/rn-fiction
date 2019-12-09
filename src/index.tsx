import React from 'react';
import {Provider} from 'react-redux';
import App from './navigation-config';
import MusicControl from './components/MusicControl';

import models from './dva';

import {create} from 'dva-core';

const app = create();

models.forEach(o => {
  app.model(o);
});

app.start();

export default () => (
  <Provider store={app._store}>
    <App />
    <MusicControl />
  </Provider>
);
