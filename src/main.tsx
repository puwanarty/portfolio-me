import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ScrollProvider } from './contexts/ScrollContext.tsx'
import { ObserverContextProvider } from './contexts/ObserverContext.tsx'
import { NavbarContextProvider } from './contexts/NavbarContext.tsx'

// scroll to top on page refresh
window.onbeforeunload = () => {
  window.scrollTo(0, 0)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollProvider>
      <ObserverContextProvider>
        <NavbarContextProvider>
          <App />
        </NavbarContextProvider>
      </ObserverContextProvider>
    </ScrollProvider>
  </React.StrictMode>
)
