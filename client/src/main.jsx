/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {createStore , applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(reducers , compose(applyMiddleware(thunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  
  </React.StrictMode>,
)
 