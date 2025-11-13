import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

// Punto de entrada: monta la aplicación React en el DOM.
// El enlace 'Saltar al contenido' mejora la accesibilidad para teclado/lectores.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <a href="#main-content" className='sr-only focus:not-sr-only focus:absolute
    focus:top-4 focus:left-4 bg-blue-600 text-gray-400 px-4 py-2 rounded z-50'>
      Saltar al contenido principal
    </a>

    <App />
  </StrictMode>,
)
