import { Star, Shield, TrendingUp, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { Card } from '../components/Card';

export const Assessoria = () => {
  const assessores = [
    { id: 1, nome: 'Thiago Vasconcelos', especialidade: 'Renda Variável & Opções', credencial: 'CNPI-T 2931', iniciais: 'TV' },
    { id: 2, nome: 'Camila Junqueira', especialidade: 'Wealth Management & FIIs', credencial: 'CFP 8492', iniciais: 'CJ' },
    { id: 3, nome: 'Rafael Costa', especialidade: 'Alocação Global & Renda Fixa', credencial: 'CGA 1045', iniciais: 'RC' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-evo-blueMain/20 blur-[100px] rounded-full pointer-events-none"></div>
        <h1 className="text-3xl md:text-5xl font-bold text-evo-textMain tracking-tight relative z-10">
          Eleve seus investimentos com a <span className="bg-gradient-to-r from-evo-blueMain to-evo-green bg-clip-text text-transparent">Assessoria Evorix</span>
        </h1>
        <p className="text-evo-textSec text-lg max-w-2xl mx-auto relative z-10">
          Deixe nossos especialistas validarem seus scores, equilibrarem seu portfólio e executarem ordens complexas para você.
        </p>
      </div>

      {/* Grid de Benefícios e Plano */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Benefícios */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-evo-textMain border-b border-evo-border pb-2">Por que ter um assessor?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card className="flex flex-col gap-2 hover:border-evo-blueMain/30 transition-colors">
              <Star className="text-evo-blueMain mb-2" size={28} />
              <h4 className="font-bold text-evo-textMain">Análise Personalizada</h4>
              <p className="text-sm text-evo-textSec">Ajustamos o motor quantitativo para o seu momento de vida e tolerância a risco.</p>
            </Card>
            <Card className="flex flex-col gap-2 hover:border-evo-blueMain/30 transition-colors">
              <Shield className="text-evo-green mb-2" size={28} />
              <h4 className="font-bold text-evo-textMain">Proteção Patrimonial</h4>
              <p className="text-sm text-evo-textSec">Estratégias de hedge e diversificação internacional para blindar sua carteira.</p>
            </Card>
            <Card className="flex flex-col gap-2 hover:border-evo-blueMain/30 transition-colors">
              <TrendingUp className="text-yellow-500 mb-2" size={28} />
              <h4 className="font-bold text-evo-textMain">Acesso Exclusivo</h4>
              <p className="text-sm text-evo-textSec">Produtos de renda fixa e fundos fechados que não estão disponíveis no varejo.</p>
            </Card>
          </div>
        </div>

        {/* Card de Preço (Plano) */}
        <Card className="relative overflow-hidden border-evo-blueMain/50 bg-gradient-to-b from-evo-bgSec to-evo-card">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-evo-blueMain to-evo-green"></div>
          <div className="p-2">
            <span className="bg-evo-blueMain/20 text-evo-blueMain text-xs font-bold px-3 py-1 rounded-full border border-evo-blueMain/30 uppercase tracking-wide">
              Plano Wealth
            </span>
            <h3 className="text-3xl font-bold text-evo-textMain mt-4">R$ 149<span className="text-sm text-evo-textSec font-normal">/mês</span></h3>
            <p className="text-sm text-evo-textSec mt-2 border-b border-evo-border pb-4">
              Isento para carteiras acima de R$ 300k.
            </p>
            <ul className="space-y-3 mt-4 mb-6">
              <li className="flex items-center gap-2 text-sm text-evo-textMain">
                <CheckCircle size={16} className="text-evo-green" /> Reunião mensal de alinhamento
              </li>
              <li className="flex items-center gap-2 text-sm text-evo-textMain">
                <CheckCircle size={16} className="text-evo-green" /> Relatório quantitativo customizado
              </li>
              <li className="flex items-center gap-2 text-sm text-evo-textMain">
                <CheckCircle size={16} className="text-evo-green" /> Suporte VIP via WhatsApp
              </li>
            </ul>
            <button className="w-full bg-evo-blueMain hover:bg-evo-blueSec text-white font-bold py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2">
              Assinar Agora <ArrowRight size={18} />
            </button>
          </div>
        </Card>
      </div>

      {/* Nossos Assessores */}
      <div>
        <h3 className="text-xl font-bold text-evo-textMain border-b border-evo-border pb-2 mb-6">Conheça nossos especialistas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assessores.map((assessor) => (
            <Card key={assessor.id} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-evo-bgMain border-2 border-evo-border group-hover:border-evo-blueMain transition-colors flex items-center justify-center mb-4 relative overflow-hidden">
                <span className="text-2xl font-bold text-evo-textSec group-hover:text-evo-blueMain transition-colors">{assessor.iniciais}</span>
              </div>
              <h4 className="font-bold text-evo-textMain text-lg">{assessor.nome}</h4>
              <span className="text-xs font-medium text-evo-blueMain mb-2">{assessor.credencial}</span>
              <p className="text-sm text-evo-textSec mb-6">{assessor.especialidade}</p>
              
              <button className="mt-auto w-full border border-evo-border hover:border-evo-blueMain hover:text-evo-blueMain bg-evo-bgSec px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Calendar size={16} /> Agendar Papo
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};  