// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Analises } from './pages/analises';
import { Carteira } from './pages/Carteira';
import { Assessoria } from './pages/Assessoria';
import { Perfil } from './pages/Perfil';
import { Configuracoes } from './pages/Configuracoes';
import { Favoritos } from './pages/Favoritos';
import { FavoritesProvider } from './context/FavoritesProvider';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analises" element={<Analises />} />
            <Route path="carteira" element={<Carteira />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="assessoria" element={<Assessoria />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="config" element={<Configuracoes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;