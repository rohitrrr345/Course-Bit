import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider, ColorModeScript,theme } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
     
    <App />
    </ChakraBaseProvider>
   
  </StrictMode>,
)
