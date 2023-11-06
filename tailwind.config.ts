import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pop-business-blue': '#00417D',
        'pop-dodger-blue': '#329BFF',
        'pop-pumpkin-orange': '#EE7824',
        'pop-participant-yellow': '#FFC107',
        'pop-prussian-blue': '#002B5A',
        'pop-gray-1': '#333333',
        'pop-gray-2': '#4F4F4F',
        'pop-gray-3': '#828282',
        'pop-gray-4': '#BDBDBD',
        'pop-gray-5': '#E0E0E0',
        'pop-gray-6': '#F2F2F2',
        'pop-steel-blue': '#546E7A',
        'pop-steel-blue-light': '#78909C',
        'pop-baby-blue': '#B5CDFF',
        'pop-background': '#F3F9FD',
        'pop-succees': '#4CAF50',
        'pop-error': '#DB3737',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
