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


# Setting up the Project

## Step 1: Project Initialization with NPM Init 
Begin by initializing your project using npm init with Default Options 
```bash
npm init -y
```
This command generates a package.json file with default configurations for your project. It's a quick way to set up a new Node.js project without having to answer a series of questions interactively.

## Step 2: Setup Dependencies
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




