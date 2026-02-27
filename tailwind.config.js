/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Allow manual or system dark mode toggling; we'll default to dark
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#171717',
                primary: '#3b82f6', // Premium bright blue
                accent: '#8b5cf6', // Violet accent
                textMain: '#f3f4f6', // Gray-100
                textMuted: '#9ca3af', // Gray-400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
