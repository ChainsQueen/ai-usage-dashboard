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
  'gpt-4': 52,
  llama3: 28,
  mistral: 15,
  claude: 5,
};

export type PromptLog = {
  id: string;
  date: string; // ISO
  model: keyof typeof modelDistribution | string;
  prompt: string;
  response: string;
  tokens: number;
  status: 'ok' | 'error';
};

export const promptLogs: PromptLog[] = [
  {
    id: '1',
    date: '2025-10-01T10:00:00Z',
    model: 'gpt-4',
    prompt: 'Summarize yesterday\'s metrics',
    response: 'Tokens up 12%, requests up 5% week-over-week.',
    tokens: 312,
    status: 'ok',
  },
  {
    id: '2',
    date: '2025-10-01T10:15:00Z',
    model: 'llama3',
    prompt: 'Generate test data for dashboard',
    response: 'Created 100 sample entries for usage and logs.',
    tokens: 210,
    status: 'ok',
  },
  {
    id: '3',
    date: '2025-10-01T10:30:00Z',
    model: 'mistral',
    prompt: 'Translate a short paragraph to Spanish',
    response: 'Traducción completada con éxito.',
    tokens: 95,
    status: 'ok',
  },
  {
    id: '4',
    date: '2025-10-01T11:00:00Z',
    model: 'claude',
    prompt: 'Explain variance in error rates',
    response: 'Spike due to provider API rate-limits between 09:00-10:00 UTC.',
    tokens: 188,
    status: 'error',
  },
];
