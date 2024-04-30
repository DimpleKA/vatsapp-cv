import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './store.jsx'
import { Provider } from 'react-redux'
import { LoginProvider } from './Components/context/LoginContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider >
    <Provider store={store}>
    <App />
    </Provider>
    </LoginProvider>
  </React.StrictMode>,
)
