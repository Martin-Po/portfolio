import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Scroll from 'react-scroll'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import ThemeProviderComponent from './components/ThemeProviderComponent';
import  { HelmetProvider } from 'react-helmet-async';


const scroll = Scroll.animateScroll





ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}>
        <ThemeProviderComponent>
        <HelmetProvider>
          <App scroll={scroll} /> 
          </HelmetProvider>
          </ThemeProviderComponent>
        </Provider>
  </Router>
)
