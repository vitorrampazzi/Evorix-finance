import { useState } from 'react';
import { Card } from '../components/Card';
import { ScoreIndicator } from '../components/ScoreIndicator';
import { mockAssets } from '../data/mockData';
import { Trophy, ShieldCheck, DollarSign, BarChart3, ChevronRight } from 'lucide-react';

export const Analises = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('score');

  // Simulação do Motor Quantitativo ordenando os dados
  const ativosOrdenados = [...mockAssets].sort((a, b) => {
    if (filtroAtivo === 'score') return b.score - a.score;
    if (filtroAtivo === 'valuation') return b.indicators.valuation - a.indicators.valuation;
    if (filtroAtivo === 'risco') return b.indicators.risco - a.indicators.risco; 
    if (filtroAtivo === 'dividendos') return b.indicators.dividendos - a.indicators.dividendos;
    return 0;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-evo-textMain tracking-tight">Análise Quantitativa</h1>
        <p className="text-evo-textSec mt-1">Oportunidades encontradas pelo nosso algoritmo baseadas em critérios matemáticos.</p>
      </div>

      {/* Filtros Inteligentes */}
      <div className="flex flex-wrap gap-3">
        <FiltroBtn 
          ativo={filtroAtivo === 'score'} 
          onClick={() => setFiltroAtivo('score')} 
          icon={<Trophy size={16} />} 
          texto="Maior Score Geral" 
        />
        <FiltroBtn 
          ativo={filtroAtivo === 'valuation'} 
          onClick={() => setFiltroAtivo('valuation')} 
          icon={<BarChart3 size={16} />} 
          texto="Melhor Valuation" 
        />
        <FiltroBtn 
          ativo={filtroAtivo === 'risco'} 
          onClick={() => setFiltroAtivo('risco')} 
          icon={<ShieldCheck size={16} />} 
          texto="Menor Risco" 
        />
        <FiltroBtn 
          ativo={filtroAtivo === 'dividendos'} 
          onClick={() => setFiltroAtivo('dividendos')} 
          icon={<DollarSign size={16} />} 
          texto="Maior Dividend Yield" 
        />
      </div>

      {/* Lista de Top Oportunidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {ativosOrdenados.map((asset, index) => (
          <Card key={asset.ticker} className="flex flex-col relative overflow-hidden group hover:border-evo-blueMain/50 transition-all cursor-pointer">
            
            {/* Tag de Posição do Ranking */}
            {filtroAtivo === 'score' && index < 3 && (
              <div className="absolute top-0 right-0 bg-evo-blueMain/20 text-evo-blueMain text-[10px] font-bold px-3 py-1 rounded-bl-lg border-b border-l border-evo-blueMain/30">
                TOP {index + 1}
              </div>
            )}

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-evo-textMain group-hover:text-evo-blueMain transition-colors">{asset.ticker}</h3>
                <p className="text-sm text-evo-textSec">{asset.name}</p>
              </div>
              <ScoreIndicator score={asset.score} />
            </div>

            <div className="space-y-3 mb-6">
              <BarraIndicador label="Valuation" valor={asset.indicators.valuation} />
              <BarraIndicador label="Fundamentos" valor={asset.indicators.fundamentos} />
              <BarraIndicador label="Risco" valor={asset.indicators.risco} />
              <BarraIndicador label="Dividendos" valor={asset.indicators.dividendos} />
            </div>

            <div className="mt-auto pt-4 border-t border-evo-border flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xs text-evo-textSec">Classificação</span>
                <span className={`text-sm font-bold ${
                  asset.category === 'Excelente' ? 'text-evo-green' : 
                  asset.category === 'Muito Bom' ? 'text-evo-blueMain' : 'text-yellow-500'
                }`}>
                  {asset.category}
                </span>
              </div>
              <button className="text-evo-bgMain bg-evo-blueMain hover:bg-evo-blueSec px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                Ver Detalhes <ChevronRight size={16} />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Componente para os botões de filtro
const FiltroBtn = ({ ativo, onClick, icon, texto }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      ativo 
      ? 'bg-evo-blueMain/20 text-evo-blueMain border border-evo-blueMain/50 shadow-[0_0_10px_rgba(59,130,246,0.2)]' 
      : 'bg-evo-bgSec text-evo-textSec border border-evo-border hover:border-evo-textSec hover:text-evo-textMain'
    }`}
  >
    {icon}
    {texto}
  </button>
);

// Componente para as famosas barrinhas de progresso
const BarraIndicador = ({ label, valor }: { label: string, valor: number }) => {
  const getCorBarra = (v: number) => {
    if (v >= 80) return 'bg-evo-green shadow-[0_0_8px_rgba(0,214,143,0.5)]';
    if (v >= 60) return 'bg-evo-blueMain shadow-[0_0_8px_rgba(59,130,246,0.5)]';
    if (v >= 40) return 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]';
    return 'bg-evo-red shadow-[0_0_8px_rgba(255,77,103,0.5)]';
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs">
        <span className="text-evo-textSec">{label}</span>
        <span className="text-evo-textMain font-medium">{valor}%</span>
      </div>
      <div className="w-full h-1.5 bg-evo-bgMain rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${getCorBarra(valor)}`}
          style={{ width: `${valor}%` }}
        />
      </div>
    </div>
  );
};