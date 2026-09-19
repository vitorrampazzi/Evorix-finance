// src/pages/Perfil.tsx
import { useState } from 'react';
import { Card } from '../components/Card';
import { Save } from 'lucide-react';
import { ScoreIndicator } from '../components/ScoreIndicator';
import { mockRecomendados } from '../data/mockData';

export const Perfil = () => {
  const [usuario, setUsuario] = useState({
    nome: 'Vitor Rampazzi Franco',
    email: 'vitor.franco@fiap.com.br',
    documento: '***.458.890-**',
    plano: 'Wealth Premium',
    perfilRisco: 'Moderado / Crescimento',
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-evo-textMain tracking-tight">Meu Perfil</h1>
        <p className="text-evo-textSec mt-1">Seus dados cadastrais e o que o motor quantitativo recomenda pra você.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card glow="blue" className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold border-b border-white/5 pb-3">Informações Cadastrais</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-evo-textSec block mb-1">Nome Completo</label>
              <input
                type="text"
                value={usuario.nome}
                onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
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
                onChange={(e) => setUsuario({ ...usuario, perfilRisco: e.target.value })}
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

      {/* Combina com seu perfil */}
      <Card glow="green">
        <h3 className="text-lg font-semibold mb-1">Combina com seu perfil</h3>
        <p className="text-sm text-evo-textSec mb-5">
          Ativos selecionados pelo motor quantitativo considerando seu perfil "{usuario.perfilRisco}".
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockRecomendados.map(ativo => (
            <div key={ativo.ticker} className="p-4 rounded-xl border border-white/5 bg-evo-bgMain hover:border-evo-green/30 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-evo-textMain">{ativo.ticker}</h4>
                  <span className="text-xs text-evo-textSec">{ativo.name}</span>
                </div>
                <ScoreIndicator score={ativo.score} />
              </div>
              <p className="text-xs text-evo-textSec mt-3">{ativo.motivo}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};