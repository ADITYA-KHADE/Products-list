import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {AuthProvider} from "./Contexts/AuthContext";
import {ThemeProvider} from "./Contexts/ThemeContext";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
