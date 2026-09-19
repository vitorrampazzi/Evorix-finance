// src/context/favoritesContext.ts
import { createContext } from 'react';

export interface FavoritesContextType {
  favoritos: string[];
  toggleFavorito: (ticker: string) => void;
  isFavorito: (ticker: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);