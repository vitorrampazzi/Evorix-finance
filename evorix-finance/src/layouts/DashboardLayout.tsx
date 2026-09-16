import React from 'react';
import { LayoutDashboard, TrendingUp, Briefcase, BarChart2, User, Settings, Bell } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
}

const SidebarLink = ({ icon, text, to, active = false }: SidebarLinkProps) => (
  <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active ? 'bg-evo-blueMain/10 text-evo-blueMain border border-evo-blueMain/20' : 'text-evo-textSec hover:bg-evo-card hover:text-evo-textMain'}`}>
    {icon}
    <span className="font-medium">{text}</span>
  </Link>
);

export const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-evo-bgMain text-evo-textMain font-sans flex">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-evo-bgSec border-r border-evo-border hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-evo-blueMain to-evo-green bg-clip-text text-transparent tracking-tight">
            Evorix Finance
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <SidebarLink icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" active={location.pathname === '/'} />
          <SidebarLink icon={<Briefcase size={20} />} text="Minha Carteira" to="/carteira" active={location.pathname === '/carteira'} />
          <SidebarLink icon={<BarChart2 size={20} />} text="Análises" to="/analises" active={location.pathname === '/analises'} />
        </nav>
        <div className="p-4 border-t border-evo-border space-y-2">
          <SidebarLink icon={<User size={20} />} text="Seu Perfil" to="/perfil" active={location.pathname === '/perfil'} />
          <SidebarLink icon={<Settings size={20} />} text="Configurações" to="/config" active={location.pathname === '/config'} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header Superior */}
        <header className="h-20 border-b border-evo-border bg-evo-bgSec/50 backdrop-blur-md flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-semibold text-evo-textMain">Visão Geral</h2>
          <div className="flex items-center gap-6">
            <button className="relative text-evo-textSec hover:text-evo-textMain transition">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-evo-red rounded-full border-2 border-evo-bgSec"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-evo-blueMain/20 border border-evo-blueMain flex items-center justify-center text-evo-blueMain font-bold">
                VR
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};