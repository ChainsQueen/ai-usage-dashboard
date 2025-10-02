import { motion, type HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'
import { forwardRef } from 'react'

export type InteractiveCardProps = {
  className?: string
  children: React.ReactNode
  /** Extra Tailwind classes applied to the outer wrapper */
  outerClassName?: string
  /** Enable a subtle spotlight hover ring */
  spotlight?: boolean
} & Omit<HTMLMotionProps<'div'>, 'className'>

/**
 * InteractiveCard
 * A small, reusable motion wrapper for cards/containers.
 * - Subtle scale and lift on hover
 * - Smooth spring transitions
 * - Optional spotlight effect (radial gradient on hover)
 */
export const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, outerClassName, children, spotlight = true, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.6 }}
        className={clsx(
          'relative rounded-xl border border-white/10 bg-white/5 shadow-sm backdrop-blur',
          // base interactive outline for keyboard users
          'outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
          className,
        )}
        {...rest}
      >
        {/* optional spotlight overlay */}
        {spotlight && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity duration-300 [mask-image:radial-gradient(180px_180px_at_var(--x)_var(--y),#fff,transparent)] group-hover:opacity-100"
            // The spotlight uses CSS variables set by onMouseMove below
            style={{ background: 'radial-gradient(300px 200px at var(--x) var(--y), rgba(99,102,241,0.18), transparent 60%)' }}
          />
        )}
        <div className={clsx('p-3 sm:p-4', outerClassName)}>{children}</div>
      </motion.div>
    )
  },
)
InteractiveCard.displayName = 'InteractiveCard'

/**
 * Utility to wire CSS variables for spotlight effect.
 * Usage: pass onMouseMove={setSpotlightVars} to InteractiveCard.
 */
export function setSpotlightVars(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  el.style.setProperty('--x', `${x}px`)
  el.style.setProperty('--y', `${y}px`)
}
