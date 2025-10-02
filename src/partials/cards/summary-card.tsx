import { motion } from 'framer-motion'
import clsx from 'clsx'

export function SummaryCard({ title, value, className }: { title: string; value: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={clsx('rounded-xl border border-white/10 bg-white/5 p-4 text-left shadow-sm backdrop-blur', className)}
    >
      <div className="text-sm text-gray-300">{title}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </motion.div>
  )
}
