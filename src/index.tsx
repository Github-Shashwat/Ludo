import React from 'react';
import { Provider } from 'react-redux';
// @ts-ignore
import { createRoot } from 'react-dom/client';

import { Ludo } from 'containers/Ludo/Container';
import { store } from 'state/store';

import './prototypeOverrides';

import * as serviceWorker from './serviceWorker';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Ludo />
    </React.StrictMode>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
