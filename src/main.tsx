import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { MessageProvider } from './contexts/messageContext'  // mar nem kell 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <MessageProvider>
    <App />

  // </MessageProvider>
  
)
