import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GamesProvider } from './contexts/GamesData'

// @ts-ignore
import { GlobalStyle } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    { /*@ts-ignore*/ }
    <GlobalStyle  />
    <GamesProvider>
      <App />
    </GamesProvider>
  </React.StrictMode>,
)
