export type DailyUsage = {
  date: string; // ISO date string
  tokens: number;
  requests: number;
  errors?: number;
};

export type ModelDistribution = Record<string, number>;

export const dailyUsage: DailyUsage[] = [
  { date: '2025-09-25', tokens: 12000, requests: 320, errors: 6 },
  { date: '2025-09-26', tokens: 15000, requests: 360, errors: 7 },
  { date: '2025-09-27', tokens: 10000, requests: 400, errors: 4 },
  { date: '2025-09-28', tokens: 13000, requests: 350, errors: 5 },
  { date: '2025-09-29', tokens: 18000, requests: 420, errors: 8 },
  { date: '2025-09-30', tokens: 16000, requests: 390, errors: 5 },
  { date: '2025-10-01', tokens: 20000, requests: 480, errors: 9 },
];

export const modelDistribution: ModelDistribution = {
  'GPT-4': 52,
  'LLaMA 3': 28,
  Mistral: 15,
  Claude: 5,
};

export type PromptLog = {
  id: string;
  date: string; // ISO
  model: keyof typeof modelDistribution | string;
  prompt: string;
  response: string;
  tokens: number;
  status: 'ok' | 'error';
  responseTimeMs?: number;
};

export const promptLogs: PromptLog[] = [
  {
    id: '1',
    date: '2025-10-01T11:00:00Z',
    model: 'GPT-4',
    prompt: 'Summarize key performance metrics for 30 Sep',
    response: 'Tokens up 12%, requests up 5% week-over-week.',
    tokens: 312,
    status: 'ok',
    responseTimeMs: 850,
  },
  {
    id: '2',
    date: '2025-10-01T11:15:00Z',
    model: 'LLaMA 3',
    prompt: 'Generate mock dashboard data (JSON format)',
    response: 'Created 100 sample entries for usage and logs.',
    tokens: 210,
    status: 'ok',
    responseTimeMs: 670,
  },
  {
    id: '3',
    date: '2025-10-01T11:30:00Z',
    model: 'Mistral',
    prompt: 'Translate paragraph to Spanish (customer feedback)',
    response: 'Traducción completada con éxito.',
    tokens: 95,
    status: 'ok',
    responseTimeMs: 420,
  },
  {
    id: '4',
    date: '2025-10-01T12:00:00Z',
    model: 'Claude',
    prompt: 'Analyze spike in error rates on login service',
    response: 'Spike due to provider API rate-limits between 09:00-10:00 UTC.',
    tokens: 188,
    status: 'error',
  },
];
