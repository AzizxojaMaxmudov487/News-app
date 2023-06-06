import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import App from './components/App.jsx'

import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(  
    <Provider store={store}>
      <App />
    </Provider>
)
