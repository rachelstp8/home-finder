import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import './foundation/foundation.min.css';

import Home from './pages/Home'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Router>
    <Home default />
  </Router>,
  rootElement
)