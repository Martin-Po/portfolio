import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Scroll from 'react-scroll'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import  theme  from './Theme.js';
import { ThemeProvider } from '@emotion/react'



const scroll = Scroll.animateScroll

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App scroll={scroll} /> 
          </ThemeProvider>
        </Provider>
  </Router>
)
