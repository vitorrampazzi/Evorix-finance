import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* Adicione as outras rotas aqui conforme for criando as páginas */}
          {/* <Route path="investir" element={<Investir />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;