import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, Route, Routes } from 'react-router-dom'
import history from './history.js'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route path='/*' element={<App />} exact />
      </Routes>
    </Router>
  </Provider>
)
