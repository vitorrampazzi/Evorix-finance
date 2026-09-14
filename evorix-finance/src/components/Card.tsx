import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-evo-card border border-evo-border rounded-xl p-5 shadow-lg backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
};