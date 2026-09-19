// src/data/mockData.ts
export const mockPortfolio = {
  totalEquity: 145230.50,
  investedValue: 120000.00,
  totalReturn: 25230.50,
  returnPercentage: 21.02,
  distribution: {
    acoes: 35,
    fiis: 20,
    rendaFixa: 35,
    etfs: 10
  }
};

export const mockAssets = [
  {
    ticker: 'PETR4',
    name: 'Petrobras PN',
    price: 38.45,
    change: 1.2,
    score: 92,
    category: 'Excelente',
    indicators: {
      valuation: 88,
      fundamentos: 96,
      risco: 72,
      dividendos: 81
    }
  },
  {
    ticker: 'ITUB4',
    name: 'Itaú Unibanco',
    price: 34.12,
    change: -0.5,
    score: 87,
    category: 'Muito Bom',
    indicators: {
      valuation: 75,
      fundamentos: 90,
      risco: 85,
      dividendos: 70
    }
  }
];

export const mockRecomendados = [
  {
    ticker: 'BTLG11',
    name: 'BTG Pactual Logística',
    score: 88,
    motivo: 'Dividend yield de 10,4% e desconto de 12% sobre o valor patrimonial, alinhado ao seu perfil moderado.'
  },
  {
    ticker: 'WEGE3',
    name: 'WEG S.A.',
    score: 91,
    motivo: 'Fundamentos sólidos e baixa volatilidade histórica, bom equilíbrio entre crescimento e risco controlado.'
  },
  {
    ticker: 'IVVB11',
    name: 'iShares S&P 500',
    score: 85,
    motivo: 'Diversificação internacional recomendada para reduzir a concentração em ativos locais.'
  }
];