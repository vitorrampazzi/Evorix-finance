import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Investir } from './pages/Investir'; // <-- Importação nova

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          
          {/* Rota atualizada */}
          <Route path="investir" element={<Investir />} />
          
          <Route path="carteira" element={<div className="text-evo-textSec text-center mt-20">Página Carteira em construção...</div>} />
          <Route path="analises" element={<div className="text-evo-textSec text-center mt-20">Página Análises em construção...</div>} />
          <Route path="perfil" element={<div className="text-evo-textSec text-center mt-20">Página Perfil em construção...</div>} />
          <Route path="config" element={<div className="text-evo-textSec text-center mt-20">Página Configurações em construção...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;