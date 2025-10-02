import { create } from 'zustand'
import { dailyUsage, modelDistribution, promptLogs, type DailyUsage, type ModelDistribution, type PromptLog } from '../data/usage-data'

export type UsageState = {
  dailyUsage: DailyUsage[]
  modelDistribution: ModelDistribution
  promptLogs: PromptLog[]
}

export type UsageSelectors = {
  totalTokens: number
  totalRequests: number
  totalErrors: number
}

export const useUsageStore = create<UsageState & UsageSelectors>(() => {
  const totalTokens = dailyUsage.reduce((s, d) => s + d.tokens, 0)
  const totalRequests = dailyUsage.reduce((s, d) => s + d.requests, 0)
  const totalErrors = dailyUsage.reduce((s, d) => s + (d.errors ?? 0), 0)

  return {
    dailyUsage,
    modelDistribution,
    promptLogs,
    totalTokens,
    totalRequests,
    totalErrors,
  }
})
