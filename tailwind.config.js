/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rust: '#8e4549',      // Primary
      tan: '#f39c54',       // Secondary
      paradiso: '#347b83',  // Tertiary
      white: '#fff',        // Text
      moon: '#b5bfd7',      // Text Alt
      black: '#000',        // Text Inverted
      shuttle: '#646c7e',   // Subtext
      mirage: '#111b2a',    // Background
    }
  },
  plugins: []
};