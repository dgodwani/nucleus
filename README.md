# Nucleus : Design System Starter Using React, Typescript, Storybook


This guide provides a comprehensive step-by-step walkthrough for building a starter for a robust UI design system using 

- 🚀 **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.
- 📖 **Storybook:** An open-source tool for developing UI components in isolation, promoting faster and more efficient design workflows.

In addition to React and Storybook, This Starter is enhanced with essential tools to configure production Ready Component Library. 

- 🛠 **Vite:** A fast build tool for modern web applications with features like instant server start, rapid hot module replacement (HMR), and optimized production builds.
- 🔷 **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
- 🧹 **EsLint:** A pluggable linting utility for JavaScript and TypeScript, ensuring code consistency and identifying potential issues.
- 💅 **Prettier:** An opinionated code formatter that enforces a consistent code style, enhancing readability and collaboration.
- 🧪 **Vitest:** A fast and efficient testing framework for React components, ensuring the reliability of your codebase.
- 🐶 **Husky:** A tool that enables pre-commit and pre-push Git hooks to maintain code quality and prevent committing code that doesn't meet specified criteria.


# 1. Setting up the Project

## Project Initialization with NPM Init 
Begin by initializing your project using npm init with Default Options 
```bash
npm init -y
```
This command generates a package.json file with default configurations for your project. It's a quick way to set up a new Node.js project without having to answer a series of questions interactively.

## Setup Dependencies
Since we are building a component library, all of the dependencies must live in `devDependencies`. 

Use the following command to install the necessary development dependencies for your component library 
```bash
npm install -D react @types/react typescript prettier eslint @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-storybook @typescript-eslint/eslint-plugin
```
This command installs React, TypeScript type definitions for React, TypeScript, Prettier, and ESLint with essential plugins for React and Storybook support. The -D flag indicates that these dependencies are for development purposes.

Dependencies:
- 🚀 **react:** Core UI library.
- 📘 **@types/react:** TypeScript definitions for React.
- 📝 **typescript:** Superset for static typing.
- 💄 **prettier:** Opinionated code formatter.
- 🚨 **eslint:** Pluggable JS/TS linter.
- 🚀 **@typescript-eslint/parser:** TypeScript parser for ESLint.
- 📜 **eslint-config-prettier:** ESLint config for Prettier.
- 📝 **eslint-plugin-prettier:** ESLint plugin for Prettier.
- ⚛️ **eslint-plugin-react:** ESLint plugin for React.
- 🔄 **eslint-plugin-react-hooks:** ESLint plugin for React Hooks.
- 📚 **eslint-plugin-storybook:** ESLint plugin for Storybook.
- 🚀 **@typescript-eslint/eslint-plugin:** ESLint plugin for TypeScript.

Feel free to include any additional  dependencies or libraries your project may require by appending them to the command.

## Setup Prettier

### Step 1: Install Prettier

If you haven't already installed Prettier, you can do so using the following command:

```bash
npm install -D prettier
```
### Step 2: Create a `.prettierrc` file
Create a .prettierrc file in the root of your project to configure Prettier. Add the following content to set up basic formatting rules:
```bash
```bash
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80
  // Add any additional config as needed
}
```
<details>
  <summary><b>Explanation of Configurations:</b></summary>


#### semi (default: true):

Controls whether to add a semicolon at the end of statements.
Example: "semi": false would remove semicolons.

#### singleQuote (default: false):

Enforces the use of single quotes for string literals.
Example: "singleQuote": true would use single quotes.

#### tabWidth (default: 2):

Sets the number of spaces per indentation level when using spaces.
Example: "tabWidth": 4 would use 4 spaces for indentation.

#### useTabs (default: false):

Controls whether to use tabs for indentation instead of spaces.
Example: "useTabs": true would use tabs for indentation.

#### printWidth (default: 80):

Specifies the maximum line width before formatting is applied.
Example: "printWidth": 100 would allow lines up to 100 characters.

These are just a few examples, and Prettier provides many more configuration options that you can explore based on your coding style preferences. You can find the full list of options in the [Prettier documentation](https://prettier.io/docs/en/options.html).

</details>

### Step 3: Add Prettier Script to `package.json`
Update your package.json file to include a script that runs Prettier. Add the following script under the "scripts" section:
```bash
{
  "scripts": {
    "format": "prettier --write --parser typescript '**/*.{ts,tsx}'"
    // Adjust the file patterns as needed
  },
  // ... other configurations
}
```
### Step 4: Run Prettier
You can now run Prettier using the following command:
```bash
npm run format
```
This script formats your code according to the rules specified in the .prettierrc file.

By following these steps, you've successfully set up and configured Prettier for your project.

## Setup ESLint

### Step 1: Install ESLint
If you haven't already installed ESLint, you can do so using the following command:
```bash
npm install -D eslint @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-storybook @typescript-eslint/eslint-plugin
```

### Step 2: Create a .eslintrc.js file
Create a .eslintrc.js file in the root of your project to configure ESLint. Add the following content to set up basic linting rules:

```bash
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
```
<details>
  <summary><b>In this configuration:</b></summary>

- **env:** Specifies the environments where the code will run, enabling Jest for testing and the browser environment.
- **root:** Stops ESLint from searching for configuration in parent folders.
- **parser:** Specifies the parser for TypeScript using `@typescript-eslint/parser`.
- **plugins:** Adds the `@typescript-eslint` plugin.
- **extends:** Extends various ESLint configurations and plugins, including ESLint and Prettier recommended rules, React recommended rules, TypeScript recommended rules, and more.
- **rules:** Specifies project-specific rules, including turning off the rule that requires importing React in each file (`"react/react-in-jsx-scope": "off"`).
  
Feel free to customize these configurations based on your project's requirements. Explore more options in the [ESLint documentation](https://eslint.org/docs/latest/use/configure/).

</details>

### Step 3: Add ESLint Scripts to package.json
Update your package.json file to include scripts that run ESLint. Add the following scripts under the "scripts" section

```bash
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "npm run lint -- --fix"
    // Adjust file patterns as needed
  },
  // ... other configurations
}
```
These scripts allow you to lint your entire project (npm run lint) or automatically fix linting issues (npm run lint:fix).

### Step 4: Run ESLint
You can now run ESLint using the following commands:

This checks your code for ESLint issues.
```bash 
npm run lint
```
This attempts to automatically fix ESLint issues.
```bash
npm run lint:fix
```
By following these steps, you've successfully set up and configured ESLint for your project.
