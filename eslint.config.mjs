import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  // Next.js core-web-vitals (React, React Hooks, Next.js best practices + CWV as errors)
  ...nextVitals,

  // Next.js TypeScript rules
  ...nextTs,

  // Global ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "public/**",
    "next-env.d.ts",
  ]),

  // Project-specific rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Prevent unescaped entities in JSX — we use &apos; consistently
      "react/no-unescaped-entities": "off",

      // Allow setState in useEffect — needed for hydration guards (setMounted)
      // and route-change side effects (navbar menu close)
      "react-hooks/set-state-in-effect": "off",

      // Disable refs rule — false positives with react-hook-form handleSubmit
      "react-hooks/refs": "off",

      // Allow custom fonts loaded via next/font
      "@next/next/no-page-custom-font": "off",

      // Catch unused variables — error level, allow underscore-prefixed
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Enforce import type for type-only imports (reduces bundle size)
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],

      // Prevent accidental console.log in production
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Prefer const for variables that are never reassigned
      "prefer-const": "error",

      // No debugger statements
      "no-debugger": "error",

      // Require === and !== over == and !=
      eqeqeq: ["error", "always", { null: "ignore" }],

      // No var — use let/const
      "no-var": "error",
    },
  },

  // Prettier must be LAST to disable all formatting rules that conflict
  eslintConfigPrettier,
]);

export default eslintConfig;
