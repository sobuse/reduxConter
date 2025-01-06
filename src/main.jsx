import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // Import Provider
import { store } from './app/store' // Import store
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider makes the Redux store available to any nested components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)