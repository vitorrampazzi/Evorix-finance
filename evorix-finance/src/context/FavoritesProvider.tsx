// src/context/FavoritesProvider.tsx
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { FavoritesContext } from './favoritesContext';

const STORAGE_KEY = 'evorix_favoritos';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
    } catch {
      // localStorage indisponível (ex: modo privado) — ignora silenciosamente
    }
  }, [favoritos]);

  const toggleFavorito = (ticker: string) => {
    setFavoritos(prev =>
      prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker]
    );
  };

  const isFavorito = (ticker: string) => favoritos.includes(ticker);

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
};