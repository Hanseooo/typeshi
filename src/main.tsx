import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './context/themeProvider.tsx'
import OptionProvider from './context/OptionProvider.tsx'
import ModalProvider from './context/ModalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <OptionProvider>
    <ModalProvider>
      <ThemeProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ThemeProvider>
    </ModalProvider>
  </OptionProvider>,
)
