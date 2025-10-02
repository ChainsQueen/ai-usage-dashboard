import "./App.css"
import { SummaryCard } from "./partials/cards/summary-card"
import { UsageLineChart } from "./partials/charts/usage-line-chart"
import { ModelPieChart } from "./partials/charts/model-pie-chart"
import { PromptLogTable } from "./partials/table/prompt-log-table"
import { ThemeToggle } from "./partials/ui/theme-toggle"
import { useUsageStore } from "./core/state/use-usage-store"
import type { UsageState, UsageSelectors } from "./core/state/use-usage-store"
import { InteractiveCard, setSpotlightVars } from "./design-system/interactive-card"

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
          <InteractiveCard className="group" onMouseMove={setSpotlightVars}>
            <SummaryCard title="Total Tokens" value={totalTokens.toLocaleString()} />
          </InteractiveCard>
          <InteractiveCard className="group" onMouseMove={setSpotlightVars}>
            <SummaryCard title="Total Requests" value={totalRequests.toLocaleString()} />
          </InteractiveCard>
          <InteractiveCard className="group" onMouseMove={setSpotlightVars}>
            <SummaryCard title="Errors" value={totalErrors.toLocaleString()} />
          </InteractiveCard>
        </section>

        {/* Charts */}
        <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <InteractiveCard className="group lg:col-span-2" onMouseMove={setSpotlightVars} outerClassName="p-4">
            <h2 className="mb-3 text-lg font-semibold text-white">Usage Over Time</h2>
            <UsageLineChart />
          </InteractiveCard>
          <InteractiveCard className="group" onMouseMove={setSpotlightVars} outerClassName="p-4">
            <h2 className="mb-3 text-lg font-semibold text-white">Model Distribution</h2>
            <ModelPieChart />
          </InteractiveCard>
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
