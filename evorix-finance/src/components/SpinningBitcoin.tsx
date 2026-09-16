import { Bitcoin } from 'lucide-react';

export const SpinningBitcoin = () => {
  return (
    <div className="flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-yellow-500/30 blur-xl rounded-full animate-pulse transition-all duration-500 group-hover:bg-yellow-500/50"></div>

        <div className="relative animate-spin-y bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border border-yellow-500/50 backdrop-blur-md rounded-full p-3 shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center justify-center">
          <Bitcoin size={42} className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};