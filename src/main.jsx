import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Headers/Header.jsx'
import Footer from './components/Footers/Footer.jsx'
import Main from './components/Main/Main.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Header/>
    <Main />
    <Footer />
  </>
)
