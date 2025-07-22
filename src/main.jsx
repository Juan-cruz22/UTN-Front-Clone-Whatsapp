import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ContactContextProvider from './Context/ContactContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContactContextProvider>
            <App />
        </ContactContextProvider>
    </BrowserRouter>
)
