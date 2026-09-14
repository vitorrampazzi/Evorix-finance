import React from 'react';
import { Card } from '../components/Card';
import { mockPortfolio, mockAssets } from '../data/mockData';
import { ScoreIndicator } from '../components/ScoreIndicator';
import { TrendingUp, DollarSign, Activity } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement<{ size?: number | string }>;
  highlight?: string;
  isPositive?: boolean;
}

const MetricCard = ({ title, value, icon, highlight, isPositive = true }: MetricCardProps) => (
  <Card className="flex flex-col gap-2 relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 text-evo-bgMain opacity-50 group-hover:scale-110 transition-transform duration-500">
      {React.cloneElement(icon, { size: 100 })}
    </div>
    <span className="text-evo-textSec font-medium text-sm z-10">{title}</span>
    <span className="text-3xl font-bold text-evo-textMain z-10">{value}</span>
    {highlight && (
      <span className={`text-xs font-semibold z-10 ${isPositive ? 'text-evo-green' : 'text-evo-red'}`}>
        {highlight}
      </span>
    )}
  </Card>
);

export const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
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
        {/* Insights */}
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 border-b border-evo-border pb-3">Insights da sua Carteira</h3>
          <ul className="space-y-5 mt-4">
            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-evo-blueMain mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <p className="text-evo-textSec leading-relaxed">
                <strong className="text-evo-textMain">Concentração:</strong> Seu portfólio está focado em renda variável (35%). O algoritmo sugere avaliar aportes em ETFs para balanceamento.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
              <p className="text-evo-textSec leading-relaxed">
                <strong className="text-evo-textMain">Alerta de Setor:</strong> Você possui exposição elevada ao setor financeiro. Considere diversificar em energia ou tecnologia.
              </p>
            </li>
          </ul>
        </Card>

        {/* Top Assets */}
        <Card>
          <h3 className="text-lg font-semibold mb-4 border-b border-evo-border pb-3">Top Ativos (Motor Quant)</h3>
          <div className="space-y-3 mt-4">
            {mockAssets.map(asset => (
              <div key={asset.ticker} className="flex items-center justify-between p-3 bg-evo-bgSec rounded-lg border border-evo-border hover:border-evo-blueMain/50 transition-all cursor-pointer group">
                <div>
                  <h4 className="font-bold text-evo-textMain group-hover:text-evo-blueMain transition-colors">{asset.ticker}</h4>
                  <span className="text-xs text-evo-textSec">{asset.name}</span>
                </div>
                <ScoreIndicator score={asset.score} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};