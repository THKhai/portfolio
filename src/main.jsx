/**
 * @copyright 2025 KhaiTR
 * @license Apache-2.0
 */

/**
 * Node modules
 * */
import { StrictMode } from 'react'
/**
 * Components
 * */
import { createRoot } from 'react-dom/client'

/**
 * Styles
 * */
import './index.css'
import 'lenis/dist/lenis.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
