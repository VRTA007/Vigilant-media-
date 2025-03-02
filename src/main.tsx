import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import QuiSommesNous from './QuiSommesNous.tsx';
import './index.css';
import './safari-fix.css';

// Détection de Safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Ajouter la classe safari-fix si nécessaire
if (isSafari) {
  document.documentElement.classList.add('safari-fix');
  document.body.classList.add('safari-fix');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Vigilant-media-">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
