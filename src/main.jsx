import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
