// src/layouts/DashboardLayout.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  LayoutDashboard, Briefcase, BarChart3, User, Settings, Bell,
  Headset, ChevronLeft, ChevronRight, LogOut, TrendingUp, FileText, AlertTriangle, Star
} from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
  collapsed?: boolean;
}

const SidebarLink = ({ icon, text, to, active = false, collapsed = false }: SidebarLinkProps) => (
  <Link
    to={to}
    title={collapsed ? text : undefined}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      collapsed ? 'justify-center' : ''
    } ${
      active
        ? 'bg-evo-blueMain/10 text-evo-blueMain border border-evo-blueMain/20'
        : 'text-evo-textSec hover:bg-evo-card hover:text-evo-textMain'
    }`}
  >
    {icon}
    {!collapsed && <span className="font-medium">{text}</span>}
  </Link>
);

const mockNotificacoes = [
  {
    id: 1,
    tipo: 'oportunidade' as const,
    titulo: 'Score do PETR4 subiu para 92',
    descricao: 'Alta de 6 pontos nas últimas 24h, puxada por fundamentos.',
    tempo: 'há 12 min',
  },
  {
    id: 2,
    tipo: 'alerta' as const,
    titulo: 'Concentração de setor detectada',
    descricao: 'Sua carteira está com 35% de exposição ao setor financeiro.',
    tempo: 'há 2h',
  },
  {
    id: 3,
    tipo: 'relatorio' as const,
    titulo: 'Novo relatório do seu assessor',
    descricao: 'Camila Junqueira enviou uma análise sobre FIIs de logística.',
    tempo: 'ontem',
  },
];

const iconePorTipo = {
  oportunidade: <TrendingUp size={16} className="text-evo-green" />,
  alerta: <AlertTriangle size={16} className="text-yellow-500" />,
  relatorio: <FileText size={16} className="text-evo-blueMain" />,
};

const NotificationDropdown = () => {
  const [aberto, setAberto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickFora = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setAberto(false);
      }
    };
    document.addEventListener('mousedown', handleClickFora);
    return () => document.removeEventListener('mousedown', handleClickFora);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setAberto(!aberto)}
        className="relative text-evo-textSec hover:text-evo-textMain transition"
      >
        <Bell size={24} />
        {mockNotificacoes.length > 0 && (
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-evo-red rounded-full border-2 border-evo-bgSec"></span>
        )}
      </button>

      {aberto && (
        <div className="absolute right-0 mt-3 w-80 bg-evo-card border border-evo-border rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden z-50">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <h4 className="font-semibold text-evo-textMain text-sm">Notificações</h4>
            <span className="text-[10px] text-evo-blueMain bg-evo-blueMain/10 px-2 py-0.5 rounded-full border border-evo-blueMain/20">
              {mockNotificacoes.length} novas
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-white/5">
            {mockNotificacoes.map((n) => (
              <div key={n.id} className="p-4 flex gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
                <div className="mt-0.5 shrink-0">{iconePorTipo[n.tipo]}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-evo-textMain">{n.titulo}</p>
                  <p className="text-xs text-evo-textSec mt-0.5">{n.descricao}</p>
                  <span className="text-[10px] text-evo-textSec/70 mt-1 block">{n.tempo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/5 text-center">
            <button className="text-xs text-evo-blueMain hover:text-evo-blueSec font-medium transition-colors">
              Ver todas as notificações
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileDropdown = () => {
  const [aberto, setAberto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickFora = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setAberto(false);
      }
    };
    document.addEventListener('mousedown', handleClickFora);
    return () => document.removeEventListener('mousedown', handleClickFora);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setAberto(!aberto)} className="flex items-center gap-3 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-evo-blueMain/20 border border-evo-blueMain flex items-center justify-center text-evo-blueMain font-bold">
          VR
        </div>
      </button>

      {aberto && (
        <div className="absolute right-0 mt-3 w-64 bg-evo-card border border-evo-border rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden z-50">
          <div className="p-4 border-b border-white/5">
            <p className="text-sm font-semibold text-evo-textMain">Vitor Rampazzi Franco</p>
            <p className="text-xs text-evo-textSec mt-0.5">vitor.franco@fiap.com.br</p>
            <span className="inline-block mt-2 text-[10px] text-evo-green bg-evo-green/10 px-2 py-0.5 rounded-full border border-evo-green/20">
              Wealth Premium
            </span>
          </div>

          <div className="py-2">
            <Link
              to="/perfil"
              onClick={() => setAberto(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-evo-textSec hover:bg-white/[0.02] hover:text-evo-textMain transition-colors"
            >
              <User size={16} /> Meu Perfil
            </Link>
            <Link
              to="/config"
              onClick={() => setAberto(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-evo-textSec hover:bg-white/[0.02] hover:text-evo-textMain transition-colors"
            >
              <Settings size={16} /> Configurações
            </Link>
          </div>

          <div className="py-2 border-t border-white/5">
            <button
              onClick={() => alert('Aqui entraria a lógica de logout (limpar sessão/token e redirecionar).')}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-evo-red hover:bg-evo-red/10 transition-colors"
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const DashboardLayout = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-evo-bgMain text-evo-textMain font-sans flex">
      {/* Sidebar Lateral */}
      <aside
        className={`bg-evo-bgSec border-r border-evo-border hidden md:flex flex-col transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className={`p-6 flex items-center ${collapsed ? 'justify-center' : ''}`}>
          {collapsed ? (
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-evo-blueMain to-evo-green flex items-center justify-center font-bold text-white text-sm">
              E
            </div>
          ) : (
            <h1 className="text-xl font-bold bg-gradient-to-r from-evo-blueMain to-evo-green bg-clip-text text-transparent tracking-tight">
              Evorix Finance
            </h1>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mx-4 mb-2 flex items-center justify-center gap-2 text-evo-textSec hover:text-evo-textMain text-xs py-1.5 rounded-lg hover:bg-white/[0.02] transition-colors"
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <>
              <ChevronLeft size={16} /> Recolher
            </>
          )}
        </button>

        <nav className="flex-1 px-4 space-y-2 mt-2">
          <SidebarLink icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" active={location.pathname === '/'} collapsed={collapsed} />
          <SidebarLink icon={<BarChart3 size={20} />} text="Análises" to="/analises" active={location.pathname === '/analises'} collapsed={collapsed} />
          <SidebarLink icon={<Briefcase size={20} />} text="Minha Carteira" to="/carteira" active={location.pathname === '/carteira'} collapsed={collapsed} />
          <SidebarLink icon={<Star size={20} />} text="Favoritos" to="/favoritos" active={location.pathname === '/favoritos'} collapsed={collapsed} />
        </nav>

        {/* Sessão Inferior: CTA de Assessoria */}
        <div className="p-4 border-t border-evo-border">
          {collapsed ? (
            <Link
              to="/assessoria"
              title="Evorix Premium"
              className="w-10 h-10 mx-auto rounded-full bg-evo-blueMain/20 text-evo-blueMain flex items-center justify-center hover:bg-evo-blueMain/30 transition-colors"
            >
              <Headset size={20} />
            </Link>
          ) : (
            <div className="bg-gradient-to-br from-evo-card to-evo-bgMain border border-evo-blueMain/30 p-4 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-evo-blueMain/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-evo-blueMain/20 text-evo-blueMain flex items-center justify-center">
                  <Headset size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-evo-textMain">Evorix Premium</h4>
                  <p className="text-[10px] text-evo-textSec mt-1 mb-3">Monte sua carteira com um especialista.</p>
                </div>
                <Link
                  to="/assessoria"
                  className="w-full bg-evo-blueMain hover:bg-evo-blueSec text-white text-xs font-bold py-2 rounded-lg transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)] block text-center"
                >
                  Falar com Assessor
                </Link>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="relative z-20 h-20 border-b border-evo-border bg-evo-bgSec/50 backdrop-blur-md flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-semibold text-evo-textMain">Visão Geral</h2>
          <div className="flex items-center gap-6">
            <NotificationDropdown />
            <ProfileDropdown />
          </div>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};