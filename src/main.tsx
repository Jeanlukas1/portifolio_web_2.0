import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fontes servidas pelo próprio site (Fontsource), sem bloquear a renderização com o Google Fonts.
import '@fontsource-variable/inter'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
