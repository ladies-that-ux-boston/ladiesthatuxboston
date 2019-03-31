import Typography from 'typography';
// import sutroTheme from 'typography-theme-sutro'
// sutroTheme.bodyFontFamily = ['Muli', 'sans-serif']

const typography = new Typography({
  baseFontSize: '100%',
  baseLineHeight: 1.5,
  headerFontFamily: ['Muli', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Muli', 'sans-serif'],
});

// Output CSS as string.
typography.toString();

// const typography = new Typography(sutroTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
