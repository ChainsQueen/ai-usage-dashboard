import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useUsageStore } from '../../core/state/use-usage-store'
import type { DailyUsage } from '../../core/data/usage-data'
import type { UsageState, UsageSelectors } from '../../core/state/use-usage-store'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

export function UsageLineChart() {
  const usage = useUsageStore((s: UsageState & UsageSelectors) => s.dailyUsage)

  const labels = usage.map((d: DailyUsage) => d.date)
  const tokens = usage.map((d: DailyUsage) => d.tokens)
  const requests = usage.map((d: DailyUsage) => d.requests)

  const data = {
    labels,
    datasets: [
      {
        label: 'Tokens',
        data: tokens,
        borderColor: 'rgba(99, 102, 241, 1)', // indigo-500
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        fill: true,
        tension: 0.35,
      },
      {
        label: 'Requests',
        data: requests,
        borderColor: 'rgba(16, 185, 129, 1)', // emerald-500
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        fill: true,
        tension: 0.35,
      },
    ],
  }

  const isSmall = typeof window !== 'undefined' ? window.innerWidth < 640 : false

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: !isSmall, labels: { color: '#e5e7eb' } },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { color: '#9ca3af' },
        grid: { color: 'rgba(255,255,255,0.06)' },
      },
      y: {
        ticks: { color: '#9ca3af' },
        grid: { color: 'rgba(255,255,255,0.06)' },
      },
    },
  } as const

  return (
    <div className="h-48 w-full sm:h-64 md:h-80 lg:h-96">
      <Line options={options} data={data} />
    </div>
  )
}
