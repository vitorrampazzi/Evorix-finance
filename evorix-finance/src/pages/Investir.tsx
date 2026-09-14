import { useState } from 'react';
import { Card } from '../components/Card';
import { Search, Filter, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { mockAssets } from '../data/mockData';
import { ScoreIndicator } from '../components/ScoreIndicator';

export const Investir = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtro simples simulando o back-end
  const filteredAssets = mockAssets.filter(asset => 
    asset.ticker.toLowerCase().includes(searchTerm.toLowerCase()) || 
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header da página */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-evo-textMain tracking-tight">Explorar Ativos</h1>
          <p className="text-evo-textSec mt-1">Encontre investimentos baseados em dados e análises quantitativas.</p>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <Card className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-evo-textSec" size={20} />
          <input
            type="text"
            placeholder="Pesquisar ativo (ex: PETR4, ITUB4)..."
            className="w-full bg-evo-bgSec border border-evo-border rounded-lg py-2.5 pl-10 pr-4 text-evo-textMain focus:outline-none focus:border-evo-blueMain transition-colors placeholder-evo-textSec/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 bg-evo-bgSec border border-evo-border px-4 py-2.5 rounded-lg hover:border-evo-blueMain transition-colors flex-1 md:flex-none justify-center text-evo-textSec hover:text-evo-textMain">
            <Filter size={18} />
            <span className="font-medium text-sm">Tipo</span>
          </button>
          <button className="flex items-center gap-2 bg-evo-bgSec border border-evo-border px-4 py-2.5 rounded-lg hover:border-evo-blueMain transition-colors flex-1 md:flex-none justify-center text-evo-textSec hover:text-evo-textMain">
            <SlidersHorizontal size={18} />
            <span className="font-medium text-sm">Filtros Avançados</span>
          </button>
        </div>
      </Card>

      {/* Grid de Ativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Card key={asset.ticker} className="flex flex-col gap-4 hover:border-evo-blueMain/50 transition-all cursor-pointer group">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-evo-textMain group-hover:text-evo-blueMain transition-colors">{asset.ticker}</h3>
                <p className="text-sm text-evo-textSec">{asset.name}</p>
              </div>
              <ScoreIndicator score={asset.score} />
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-evo-border/50">
              <div>
                <span className="text-xs text-evo-textSec block mb-1">Preço Atual</span>
                <span className="font-semibold text-evo-textMain">R$ {asset.price.toFixed(2).replace('.', ',')}</span>
              </div>
              <div>
                <span className="text-xs text-evo-textSec block mb-1">Variação (24h)</span>
                <span className={`font-semibold ${asset.change >= 0 ? 'text-evo-green' : 'text-evo-red'}`}>
                  {asset.change > 0 ? '+' : ''}{asset.change.toFixed(2)}%
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-evo-bgSec border border-evo-border text-evo-textSec">
                Ações
              </span>
              <button className="text-evo-blueMain flex items-center gap-1 text-sm font-medium hover:text-evo-blueSec transition-colors">
                Ver Análise <ChevronRight size={16} />
              </button>
            </div>
          </Card>
        ))}
        
        {filteredAssets.length === 0 && (
          <div className="col-span-full py-12 text-center text-evo-textSec border border-dashed border-evo-border rounded-xl">
            Nenhum ativo encontrado com esse nome ou ticker.
          </div>
        )}
      </div>
    </div>
  );
};