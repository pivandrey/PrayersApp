import React from 'react';
import { Provider } from 'react-redux';

import App from './App'
import { store } from './store/configureStore';

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}