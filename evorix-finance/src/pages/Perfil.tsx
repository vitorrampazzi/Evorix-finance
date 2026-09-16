import { useState } from 'react';
import { Card } from '../components/Card';
import { User, Shield, Key, Bell, Cpu, Save } from 'lucide-react';

export const Perfil = () => {
  const [abaAtiva, setAbaAtiva] = useState('dados');

  // Mock simulando o objeto que virá da API/Banco de Dados do usuário
  const [usuario, setUsuario] = useState({
    nome: 'Vitor Rampazzi Franco',
    email: 'vitor.franco@fiap.com.br',
    documento: '***.458.890-**',
    plano: 'Wealth Premium',
    perfilRisco: 'Moderado / Crescimento',
    apiKey: 'ev_live_99x8273165abc90123',
    notifEmail: true,
    notifWhatsapp: false,
    motorAggressiveness: '75%', // Parâmetro do Motor Quantitativo
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-evo-textMain tracking-tight">Configurações de Perfil</h1>
        <p className="text-evo-textSec mt-1">Gerencie suas credenciais, parâmetros do motor quantitativo e preferências de conta.</p>
      </div>

      {/* Abas de Navegação (Simulando entidades do Banco de Dados) */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
        <TabBtn ativo={abaAtiva === 'dados'} onClick={() => setAbaAtiva('dados')} icon={<User size={16} />} text="Dados Pessoais" />
        <TabBtn ativo={abaAtiva === 'motor'} onClick={() => setAbaAtiva('motor')} icon={<Cpu size={16} />} text="Motor Quantitativo" />
        <TabBtn ativo={abaAtiva === 'seguranca'} onClick={() => setAbaAtiva('seguranca')} icon={<Shield size={16} />} text="Segurança & API" />
        <TabBtn ativo={abaAtiva === 'notificacoes'} onClick={() => setAbaAtiva('notificacoes')} icon={<Bell size={16} />} text="Notificações" />
      </div>

      {/* Conteúdo da Aba: Dados Pessoais */}
      {abaAtiva === 'dados' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card glow="blue" className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b border-white/5 pb-3">Informações Cadastrais (User Entity)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-evo-textSec block mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  value={usuario.nome} 
                  onChange={(e) => setUsuario({...usuario, nome: e.target.value})}
                  className="w-full bg-evo-bgMain border border-white/10 rounded-lg px-4 py-2.5 text-evo-textMain font-medium focus:border-evo-blueMain outline-none transition-colors" 
                />
              </div>
              <div>
                <label className="text-xs text-evo-textSec block mb-1">E-mail Institucional / Principal</label>
                <input 
                  type="email" 
                  value={usuario.email} 
                  disabled 
                  className="w-full bg-evo-bgMain/50 border border-white/5 rounded-lg px-4 py-2.5 text-evo-textSec cursor-not-allowed" 
                />
              </div>
              <div>
                <label className="text-xs text-evo-textSec block mb-1">Documento (CPF / ID)</label>
                <input 
                  type="text" 
                  value={usuario.documento} 
                  disabled 
                  className="w-full bg-evo-bgMain/50 border border-white/5 rounded-lg px-4 py-2.5 text-evo-textSec cursor-not-allowed font-numbers" 
                />
              </div>
              <div>
                <label className="text-xs text-evo-textSec block mb-1">Perfil de Investidor (Suitability)</label>
                <select 
                  value={usuario.perfilRisco}
                  onChange={(e) => setUsuario({...usuario, perfilRisco: e.target.value})}
                  className="w-full bg-evo-bgMain border border-white/10 rounded-lg px-4 py-2.5 text-evo-textMain font-medium focus:border-evo-blueMain outline-none transition-colors"
                >
                  <option>Conservador</option>
                  <option>Moderado / Crescimento</option>
                  <option>Arrojado / Global</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button className="flex items-center gap-2 bg-evo-blueMain hover:bg-evo-blueSec text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Save size={18} /> Salvar Alterações
              </button>
            </div>
          </Card>

          {/* Card de Status da Assinatura */}
          <Card glow="green" className="flex flex-col justify-between">
            <div>
              <span className="bg-evo-green/20 text-evo-green text-xs font-bold px-3 py-1 rounded-full border border-evo-green/30 uppercase tracking-wide">
                Ativo no Sistema
              </span>
              <h3 className="text-xl font-bold text-evo-textMain mt-4">{usuario.plano}</h3>
              <p className="text-sm text-evo-textSec mt-1">
                Acesso completo ao motor quantitativo e reuniões prioritárias com assessores.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-xs text-evo-textSec block">Próxima Renovação</span>
              <span className="font-numbers text-evo-textMain font-bold">18/04/2027</span>
            </div>
          </Card>
        </div>
      )}

      {/* Conteúdo da Aba: Motor Quantitativo (Parâmetros do Robô) */}
      {abaAtiva === 'motor' && (
        <Card glow="blue" className="space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg font-semibold">Parâmetros do Motor Quantitativo (Algorithm Config)</h3>
            <p className="text-sm text-evo-textSec mt-1">Ajuste fino de como o algoritmo calcula os scores e prioriza os ativos para o seu perfil.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-evo-bgMain p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-evo-textMain">Agressividade do Algoritmo (Peso de Risco)</span>
                <span className="font-numbers text-evo-blueMain font-bold">{usuario.motorAggressiveness}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                defaultValue="75"
                className="w-full accent-evo-blueMain cursor-pointer" 
              />
              <p className="text-xs text-evo-textSec">Valores mais altos aumentam a tolerância a oscilações em busca de maiores scores de valuation.</p>
            </div>
          </div>
        </Card>
      )}

      {/* Conteúdo da Aba: Segurança e API */}
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
                value={usuario.apiKey} 
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

      {/* Conteúdo da Aba: Notificações */}
      {abaAtiva === 'notificacoes' && (
        <Card glow="none" className="space-y-4 max-w-3xl">
          <h3 className="text-lg font-semibold border-b border-white/5 pb-3">Canais de Alerta (Notification Dispatcher)</h3>
          
          <div className="flex items-center justify-between py-2">
            <div>
              <h4 className="font-medium text-evo-textMain">Alertas de Mudança de Score</h4>
              <p className="text-xs text-evo-textSec">Receba e-mails quando um ativo da sua carteira sofrer alteração drástica no motor.</p>
            </div>
            <input type="checkbox" defaultChecked={usuario.notifEmail} className="w-5 h-5 accent-evo-blueMain cursor-pointer" />
          </div>

          <div className="flex items-center justify-between py-2 border-t border-white/5">
            <div>
              <h4 className="font-medium text-evo-textMain">Resumo Diário via WhatsApp (VIP)</h4>
              <p className="text-xs text-evo-textSec">Receba o fechamento do mercado e insights do assessor direto no celular.</p>
            </div>
            <input type="checkbox" defaultChecked={usuario.notifWhatsapp} className="w-5 h-5 accent-evo-blueMain cursor-pointer" />
          </div>
        </Card>
      )}
    </div>
  );
};

// Componente auxiliar para as abas
const TabBtn = ({ ativo, onClick, icon, text }: any) => (
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