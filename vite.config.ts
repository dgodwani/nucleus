import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Entry point for library.
      name: "vite-react-ts-button", // Library name.
      fileName: (format) => `index.${format}.js`, // Output file name.
      formats: ["cjs", "es"], // Output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // External dependencies for Rollup.
    },
    sourcemap: true, // Generate source maps.
    emptyOutDir: true, // Clear output directory before building.
  },
  plugins: [dts()], // Use 'vite-plugin-dts' for TypeScript declaration files.
});