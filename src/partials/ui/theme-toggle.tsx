import { useTheme } from '../../core/hooks/use-theme'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [theme, toggle] = useTheme()

  return (
    <motion.button
      onClick={toggle}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
      whileTap={{ scale: 0.96 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </motion.button>
  )
}
