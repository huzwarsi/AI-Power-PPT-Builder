import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // tailwind.config.ts
  theme: {
    extend: {
      backgroundImage: {
        'vivid-gradient': 'linear-gradient(135deg, #ff7b54 0%, #ff5252 100%)',
      },
      textColor: {
        'vivid': '#ff7b54',
      },
    },
  },
  plugins: [],
} satisfies Config;
