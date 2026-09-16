import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Lightbulb } from 'lucide-react';

interface AlgoInsightProps {
  text: React.ReactNode;
  ctaLabel?: string;
  to?: string;
  type?: 'warning' | 'info';
}

export const AlgoInsight = ({ text, ctaLabel, to, type = 'info' }: AlgoInsightProps) => {
  const isWarning = type === 'warning';
  
  return (
    <div className={`rounded-xl border p-4 text-sm flex gap-4 items-start transition-all hover:bg-white/[0.02] ${
      isWarning ? 'border-yellow-500/20 bg-yellow-500/[0.02]' : 'border-evo-blueMain/20 bg-evo-blueMain/[0.02]'
    }`}>
      <div className={`mt-0.5 shrink-0 ${isWarning ? 'text-yellow-500' : 'text-evo-blueMain'}`}>
        {isWarning ? <AlertTriangle size={20} /> : <Lightbulb size={20} />}
      </div>
      
      <div className="flex-1">
        <p className="text-evo-textSec font-sans leading-relaxed">{text}</p>
        
        {ctaLabel && to && (
          <Link
            to={to}
            className={`mt-3 font-medium inline-flex items-center gap-1.5 transition-colors group ${
              isWarning ? 'text-yellow-500 hover:text-yellow-400' : 'text-evo-blueMain hover:text-evo-blueSec'
            }`}
          >
            {ctaLabel}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};