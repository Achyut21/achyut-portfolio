/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  // Formatting
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  printWidth: 100,
  endOfLine: "lf",
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  proseWrap: "preserve",

  // Plugins — tailwindcss MUST be last
  plugins: ["prettier-plugin-tailwindcss"],

  // Tailwind CSS v4 — point to the stylesheet entry, not a JS config
  tailwindStylesheet: "./app/globals.css",

  // Sort classes inside cn(), clsx(), cva(), twMerge() calls too
  tailwindFunctions: ["cn", "clsx", "cva", "twMerge"],
};

export default config;
