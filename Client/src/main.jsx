import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
