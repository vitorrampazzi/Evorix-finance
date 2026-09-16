import React from 'react';
import { Card } from '../components/Card';
import { mockPortfolio, mockAssets } from '../data/mockData';
import { ScoreIndicator } from '../components/ScoreIndicator';
import { TrendingUp, DollarSign, Activity, Clock } from 'lucide-react';
import { SpinningBitcoin } from '../components/SpinningBitcoin';
import { AlgoInsight } from '../components/AlgoInsight';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement<{ size?: number | string }>;
  highlight?: string;
  isPositive?: boolean;
}

const MetricCard = ({ title, value, icon, highlight, isPositive = true }: MetricCardProps) => (
  <Card glow="none" className="flex flex-col gap-2 relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 text-evo-bgMain opacity-50 group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(icon, { size: 100 })}
    </div>
    <span className="text-evo-textSec font-medium text-sm z-10">{title}</span>
    {/* Aplicando a fonte de números estilo terminal aqui */}
    <span className="text-3xl font-bold text-evo-textMain z-10 font-numbers tracking-tight">{value}</span>
    {highlight && (
      <span className={`text-xs font-semibold z-10 font-numbers ${isPositive ? 'text-evo-green' : 'text-evo-red'}`}>
        {highlight}
      </span>
    )}
  </Card>
);

export const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Título e o Bitcoin Girando com Timestamp */}
      <div className="flex items-center justify-between bg-evo-card border border-evo-border p-6 rounded-xl shadow-lg backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-evo-blueMain/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-2xl font-bold text-evo-textMain">Visão Geral do Portfólio</h2>
            <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-evo-blueMain bg-evo-blueMain/10 px-2 py-1 rounded-full border border-evo-blueMain/20">
              <Clock size={10} /> Atualizado há 12s
            </span>
          </div>
          <p className="text-evo-textSec">Acompanhe seus rendimentos e análises em tempo real.</p>
        </div>
        <SpinningBitcoin />
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          title="Patrimônio Total" 
          value={`R$ ${mockPortfolio.totalEquity.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`} 
          icon={<DollarSign />} 
          highlight="+2.4% hoje" 
        />
        <MetricCard 
          title="Rentabilidade Total" 
          value={`R$ ${mockPortfolio.totalReturn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`} 
          icon={<TrendingUp />} 
          highlight={`+${mockPortfolio.returnPercentage}%`} 
          isPositive 
        />
        <MetricCard 
          title="Volatilidade (Carteira)" 
          value="12.4%" 
          icon={<Activity />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Insights com Gatilho de Conversão */}
        <Card glow="blue" className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-5 border-b border-evo-border pb-3">Insights da sua Carteira</h3>
          <div className="space-y-4">
            <AlgoInsight 
              type="warning"
              text={<span><strong className="text-evo-textMain">Alerta de Setor:</strong> Você possui exposição elevada ao setor financeiro (35%), o que eleva seu risco direcional em caso de queda nos juros.</span>}
              ctaLabel="Fale com um CFP sobre diversificação"
              to="/assessoria"
            />
            
            <AlgoInsight 
              type="info"
              text={<span><strong className="text-evo-textMain">Oportunidade Detectada:</strong> O algoritmo identificou 3 FIIs de logística sendo negociados abaixo do valor patrimonial com dividend yield superior a 10%.</span>}
              ctaLabel="Ver relatório completo com Assessor"
              to="/assessoria"
            />
          </div>
        </Card>

        {/* Top Assets */}
        <Card glow="none">
          <h3 className="text-lg font-semibold mb-5 border-b border-evo-border pb-3">Top Ativos (Motor Quant)</h3>
          <div className="space-y-3">
            {mockAssets.map(asset => (
              <div key={asset.ticker} className="flex items-center justify-between p-3 bg-evo-bgSec rounded-lg border border-evo-border hover:border-evo-blueMain/30 transition-all cursor-pointer group">
                <div>
                  <h4 className="font-bold text-evo-textMain group-hover:text-evo-blueMain transition-colors">{asset.ticker}</h4>
                  <span className="text-xs text-evo-textSec">{asset.name}</span>
                </div>
                <div className="font-numbers">
                  <ScoreIndicator score={asset.score} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};