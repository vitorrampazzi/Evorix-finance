// src/hooks/useFavoritos.ts
import { useContext } from 'react';
import { FavoritesContext } from '../context/favoritesContext';

export const useFavoritos = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritos precisa ser usado dentro de um FavoritesProvider');
  }
  return context;
};