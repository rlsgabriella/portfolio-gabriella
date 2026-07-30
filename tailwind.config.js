/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                canvas: '#0C0F16',
                panel:  '#151A27',
                type:   '#D1C9C0',
                muted:  '#7A7469',
                node:   '#4A8FD5',
                pulse:  '#E07A44',
                trace:  '#6E9E8C',
            },
            fontFamily: {
                display: ['Syne', 'sans-serif'],
                sans:    ['DM Sans', 'sans-serif'],
                mono:    ['DM Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
