import { motion } from 'framer-motion'
import { useUsageStore } from '../../core/state/use-usage-store'
import type { UsageState, UsageSelectors } from '../../core/state/use-usage-store'
import type { PromptLog } from '../../core/data/usage-data'
import { InteractiveCard, setSpotlightVars } from '../../design-system/interactive-card'

export function PromptLogTable() {
  const logs = useUsageStore((s: UsageState & UsageSelectors) => s.promptLogs)

  const formatTs = (iso: string) => {
    const d = new Date(iso)
    const pad = (n: number) => String(n).padStart(2, '0')
    const Y = d.getUTCFullYear()
    const M = pad(d.getUTCMonth() + 1)
    const D = pad(d.getUTCDate())
    const h = pad(d.getUTCHours())
    const m = pad(d.getUTCMinutes())
    const s = pad(d.getUTCSeconds())
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
  }

  return (
    <InteractiveCard className="group" onMouseMove={setSpotlightVars} outerClassName="p-0 overflow-x-auto sm:overflow-hidden">
      <table className="min-w-[800px] sm:min-w-full divide-y divide-white/10 rounded-xl">
        <thead className="bg-white/5">
          <tr>
            <motion.th whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-default select-none">Date</motion.th>
            <motion.th whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-default select-none">Model</motion.th>
            <motion.th whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-default select-none">Prompt</motion.th>
            <motion.th whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-default select-none">Tokens</motion.th>
            <motion.th whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-default select-none">Status</motion.th>
            <motion.th whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }} className="px-3 py-2 text-left text-xs sm:text-sm font-semibold text-gray-300 hover:text-white cursor-default select-none">Resp. Time (ms)</motion.th>
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
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{formatTs(row.date)}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{row.model}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-300">{row.prompt}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{row.tokens}</td>
              <td className={`px-3 py-2 text-left text-xs sm:text-sm ${row.status === 'ok' ? 'text-emerald-400' : 'text-rose-400'}`}>{row.status}</td>
              <td className="px-3 py-2 text-left text-xs sm:text-sm text-gray-200">{row.responseTimeMs ?? '-'}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </InteractiveCard>
  )
}
