import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useUsageStore } from '../../core/state/use-usage-store'
import type { UsageState, UsageSelectors } from '../../core/state/use-usage-store'

ChartJS.register(ArcElement, Tooltip, Legend)

export function ModelPieChart() {
  const dist = useUsageStore((s: UsageState & UsageSelectors) => s.modelDistribution)
  const labels = Object.keys(dist)
  const values = Object.values(dist)

  const data = {
    labels,
    datasets: [
      {
        label: 'Model Share %',
        data: values,
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)', // indigo
          'rgba(16, 185, 129, 0.7)', // emerald
          'rgba(251, 191, 36, 0.7)', // amber
          'rgba(236, 72, 153, 0.7)', // pink
        ],
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      legend: { labels: { color: '#e5e7eb' } },
    },
  } as const

  return (
    <div className="h-72 w-full">
      <Doughnut data={data} options={options} />
    </div>
  )
}
