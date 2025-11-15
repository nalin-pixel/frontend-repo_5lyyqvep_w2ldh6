import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App'
import Test from './Test'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'
import Servizi from './pages/Servizi'
import Ecommerce from './pages/services/Ecommerce'
import DigitalContent from './pages/services/DigitalContent'
import DigitalAdvertising from './pages/services/DigitalAdvertising'
import SEO from './pages/services/SEO'
import Finanziamenti from './pages/services/Finanziamenti'
import Canthiere from './pages/services/Canthiere'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/servizi" element={<Servizi />}>
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="digital-content" element={<DigitalContent />} />
          <Route path="digital-advertising" element={<DigitalAdvertising />} />
          <Route path="seo" element={<SEO />} />
          <Route path="finanziamenti" element={<Finanziamenti />} />
          <Route path="canthiere" element={<Canthiere />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
