import { motion } from 'framer-motion'
import { useUsageStore } from '../../core/state/use-usage-store'
import type { UsageState, UsageSelectors } from '../../core/state/use-usage-store'
import type { PromptLog } from '../../core/data/usage-data'

export function PromptLogTable() {
  const logs = useUsageStore((s: UsageState & UsageSelectors) => s.promptLogs)

  return (
    <div className="overflow-x-auto sm:overflow-hidden rounded-xl border border-white/10">
      <table className="min-w-[640px] sm:min-w-full divide-y divide-white/10">
        <thead className="bg-white/5">
          <tr>
            <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300">Date</th>
            <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300">Model</th>
            <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300">Prompt</th>
            <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300">Tokens</th>
            <th className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {logs.map((row: PromptLog) => (
            <motion.tr
              key={row.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="hover:bg-white/5"
            >
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{new Date(row.date).toLocaleString()}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{row.model}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-300">{row.prompt}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{row.tokens}</td>
              <td className={`px-3 py-2 text-left text-xs sm:text-sm ${row.status === 'ok' ? 'text-emerald-400' : 'text-rose-400'}`}>{row.status}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
