import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Analises } from './pages/analises';
import { Carteira } from './pages/Carteira';
import { Assessoria } from './pages/Assessoria';
import { Perfil } from './pages/Perfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analises" element={<Analises />} />
          <Route path="carteira" element={<Carteira />} />
          <Route path="assessoria" element={<Assessoria />} />
          <Route path="perfil" element={<Perfil />} />
          
          <Route path="config" element={<div className="text-evo-textSec text-center mt-20 text-lg">Página Configurações em construção... 🚧</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;