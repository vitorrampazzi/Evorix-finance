import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Analises } from './pages/analises';
import { Carteira } from './pages/Carteira';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Rota principal (Dashboard) */}
          <Route index element={<Dashboard />} />
          <Route path="analises" element={<Analises />} />
          <Route path="carteira" element={<Carteira />} />

          {/* Rotas das páginas que ainda vamos criar (Em construção) */}
          <Route path="carteira" element={<div className="text-evo-textSec text-center mt-20 text-lg">Página Carteira em construção... 🚧</div>} />
          <Route path="perfil" element={<div className="text-evo-textSec text-center mt-20 text-lg">Página Perfil em construção... 🚧</div>} />
          <Route path="config" element={<div className="text-evo-textSec text-center mt-20 text-lg">Página Configurações em construção... 🚧</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;