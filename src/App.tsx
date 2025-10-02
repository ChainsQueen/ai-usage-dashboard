import "./App.css"
import { SummaryCard } from "./partials/cards/summary-card"
import { UsageLineChart } from "./partials/charts/usage-line-chart"
import { PromptLogTable } from "./partials/table/prompt-log-table"
import { ThemeToggle } from "./partials/ui/theme-toggle"
import { useUsageStore } from "./core/state/use-usage-store"
import type { UsageState, UsageSelectors } from "./core/state/use-usage-store"

function App() {
  const totalTokens = useUsageStore((s: UsageState & UsageSelectors) => s.totalTokens)
  const totalRequests = useUsageStore((s: UsageState & UsageSelectors) => s.totalRequests)
  const totalErrors = useUsageStore((s: UsageState & UsageSelectors) => s.totalErrors)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6">
        <h1 className="text-2xl font-semibold tracking-tight">AI Usage Dashboard</h1>
        <ThemeToggle />
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        {/* Summary */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <SummaryCard title="Total Tokens" value={totalTokens.toLocaleString()} />
          <SummaryCard title="Total Requests" value={totalRequests.toLocaleString()} />
          <SummaryCard title="Errors" value={totalErrors.toLocaleString()} />
        </section>

        {/* Chart */}
        <section className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
          <h2 className="mb-3 text-lg font-semibold text-white">Usage Over Time</h2>
          <UsageLineChart />
        </section>

        {/* Prompt logs */}
        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-white">Prompt Logs</h2>
          <PromptLogTable />
        </section>
      </main>
    </div>
  )
}

export default App
