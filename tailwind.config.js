const withMT = require("@material-tailwind/react/utils/withMT");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '500': '500px',
      },
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(400px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(200px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        slideInFromTop: 'slideInFromTop 2s ease-out',
        slideInFromRight: 'slideInFromRight 2s ease-out',
        slideInFromBottom: 'slideInFromBottom 2s ease-out',
        fadeIn: 'fadeIn 2s ease-out',
      },
    },
  },
  variants: {},
  plugins: [],
};

module.exports = withMT(config);
