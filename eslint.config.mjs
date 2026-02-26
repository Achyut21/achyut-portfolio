import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  // Next.js core-web-vitals (React, React Hooks, Next.js best practices + CWV as errors)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

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
