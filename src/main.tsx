import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import QuiSommesNous from './QuiSommesNous.tsx';
import './index.css';
import './safari-fix.css';

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
