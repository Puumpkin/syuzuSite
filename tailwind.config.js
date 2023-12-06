/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#111',
        'main-color': '#eee',
        'caret-color': '#eee',
        'sub-color': '#444',
        'sub-alt-color': '#191919',
        'text-color': '#eee',
        'error-color': '##da3333',
      },
      extend: {}
    },
    plugins: []
  };