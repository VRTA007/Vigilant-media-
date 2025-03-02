import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import QuiSommesNous from './QuiSommesNous.tsx';
import NosActivites from './NosActivites.tsx';
import NosEngagements from './NosEngagements.tsx';
import NousRejoindre from './NousRejoindre.tsx';
import Contact from './Contact.tsx';
import './index.css';
import './safari-fix.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Vigilant-media-">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/nos-activites" element={<NosActivites />} />
        <Route path="/nos-engagements" element={<NosEngagements />} />
        <Route path="/nous-rejoindre" element={<NousRejoindre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
