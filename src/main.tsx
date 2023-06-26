import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GamesProvider } from './contexts/GamesData'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GamesProvider>
      <App />
    </GamesProvider>
  </React.StrictMode>,
)
