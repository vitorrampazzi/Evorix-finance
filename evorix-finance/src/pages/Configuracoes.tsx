// src/pages/Configuracoes.tsx
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Card } from '../components/Card';
import { Cpu, Shield, Bell } from 'lucide-react';

export const Configuracoes = () => {
  const [abaAtiva, setAbaAtiva] = useState('motor');

  const [config, setConfig] = useState({
    apiKey: 'ev_live_99x8273165abc90123',
    notifEmail: true,
    notifWhatsapp: false,
    motorAggressiveness: '75%',
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-evo-textMain tracking-tight">Configurações</h1>
        <p className="text-evo-textSec mt-1">Ajuste o motor quantitativo, credenciais de integração e notificações.</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
        <TabBtn ativo={abaAtiva === 'motor'} onClick={() => setAbaAtiva('motor')} icon={<Cpu size={16} />} text="Motor Quantitativo" />
        <TabBtn ativo={abaAtiva === 'seguranca'} onClick={() => setAbaAtiva('seguranca')} icon={<Shield size={16} />} text="Segurança & API" />
        <TabBtn ativo={abaAtiva === 'notificacoes'} onClick={() => setAbaAtiva('notificacoes')} icon={<Bell size={16} />} text="Notificações" />
      </div>

      {abaAtiva === 'motor' && (
        <Card glow="blue" className="space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg font-semibold">Parâmetros do Motor Quantitativo</h3>
            <p className="text-sm text-evo-textSec mt-1">Ajuste fino de como o algoritmo calcula os scores e prioriza os ativos para o seu perfil.</p>
          </div>

          <div className="bg-evo-bgMain p-4 rounded-xl border border-white/5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-evo-textMain">Agressividade do Algoritmo (Peso de Risco)</span>
              <span className="font-numbers text-evo-blueMain font-bold">{config.motorAggressiveness}</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              defaultValue="75"
              onChange={(e) => setConfig({ ...config, motorAggressiveness: `${e.target.value}%` })}
              className="w-full accent-evo-blueMain cursor-pointer"
            />
            <p className="text-xs text-evo-textSec">Valores mais altos aumentam a tolerância a oscilações em busca de maiores scores de valuation.</p>
          </div>
        </Card>
      )}

      {abaAtiva === 'seguranca' && (
        <Card glow="none" className="space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg font-semibold">Credenciais de Integração (API Keys)</h3>
            <p className="text-sm text-evo-textSec mt-1">Use esta chave para conectar o Evorix com robôs de automação ou planilhas externas.</p>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-evo-textSec block">Chave de Produção (Bearer Token)</label>
            <div className="flex gap-2">
              <input
                type="password"
                value={config.apiKey}
                disabled
                className="w-full bg-evo-bgMain border border-white/10 rounded-lg px-4 py-2.5 text-evo-textSec font-numbers"
              />
              <button
                onClick={() => alert('Chave copiada para a área de transferência!')}
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Copiar
              </button>
            </div>
          </div>
        </Card>
      )}

      {abaAtiva === 'notificacoes' && (
        <Card glow="none" className="space-y-4 max-w-3xl">
          <h3 className="text-lg font-semibold border-b border-white/5 pb-3">Canais de Alerta</h3>

          <div className="flex items-center justify-between py-2">
            <div>
              <h4 className="font-medium text-evo-textMain">Alertas de Mudança de Score</h4>
              <p className="text-xs text-evo-textSec">Receba e-mails quando um ativo da sua carteira sofrer alteração drástica no motor.</p>
            </div>
            <input
              type="checkbox"
              checked={config.notifEmail}
              onChange={(e) => setConfig({ ...config, notifEmail: e.target.checked })}
              className="w-5 h-5 accent-evo-blueMain cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between py-2 border-t border-white/5">
            <div>
              <h4 className="font-medium text-evo-textMain">Resumo Diário via WhatsApp (VIP)</h4>
              <p className="text-xs text-evo-textSec">Receba o fechamento do mercado e insights do assessor direto no celular.</p>
            </div>
            <input
              type="checkbox"
              checked={config.notifWhatsapp}
              onChange={(e) => setConfig({ ...config, notifWhatsapp: e.target.checked })}
              className="w-5 h-5 accent-evo-blueMain cursor-pointer"
            />
          </div>
        </Card>
      )}
    </div>
  );
};

interface TabBtnProps {
  ativo: boolean;
  onClick: () => void;
  icon: ReactNode;
  text: string;
}

const TabBtn = ({ ativo, onClick, icon, text }: TabBtnProps) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
      ativo
      ? 'bg-evo-blueMain/20 text-evo-blueMain border border-evo-blueMain/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
      : 'text-evo-textSec hover:bg-white/[0.02] hover:text-evo-textMain border border-transparent'
    }`}
  >
    {icon}
    {text}
  </button>
);