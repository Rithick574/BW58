import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TestSocketProvider } from './context/testContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestSocketProvider>
    <App />
    </TestSocketProvider>
  </React.StrictMode>,
)
