import React from 'react'
import { hydrate } from 'react-dom'
import { store } from './app/store';
import { Provider } from 'react-redux'
import App from './containers/App'
import CountryReducer from '../features/Reducers/CountryReducer';
// Create Redux store with state injected by the server
store = store (CountryReducer, window.__PRELOADED_STATE__)

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)