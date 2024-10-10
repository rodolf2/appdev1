import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyButton from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyButton />
  </StrictMode>,
)
