module.exports = {
    // Environments where the code will run
    "env": {
      "jest": true,     // Enable Jest for testing
      "browser": true   // Enable browser environment
    },
  
    // Stop ESLint from searching for configuration in parent folders
    "root": true,
  
    // Parser for TypeScript (using @typescript-eslint/parser)
    "parser": "@typescript-eslint/parser", // Lint TypeScript with TS ESTree
  
    // Additional rules and configuration options
    "plugins": ["@typescript-eslint"],
  
    // Extend ESLint and Prettier configurations
    "extends": [
      "eslint:recommended",                   // ESLint recommended rules
      "plugin:react/recommended",             // React recommended rules
      "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
      "plugin:@typescript-eslint/eslint-recommended", // ESLint overrides for TypeScript
      "prettier",                             // Prettier rules
      "plugin:prettier/recommended",          // Prettier plugin integration
      "plugin:react-hooks/recommended",       // Recommended rules for React hooks
      "plugin:storybook/recommended"          // Recommended rules for Storybook
    ],
  
    // Project-specific rules
    "rules": {
      "react/react-in-jsx-scope": "off", // suppress errors for missing 'import React' in files
    }
  };