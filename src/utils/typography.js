import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

const typography = new Typography(sutroTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale