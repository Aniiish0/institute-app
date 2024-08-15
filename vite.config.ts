import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import path from "path";

// Read and parse package.json
const packageJson = JSON.parse(
  readFileSync(path.resolve(__dirname, "package.json"), "utf-8"),
);

// Extract the repository name from the "name" field in package.json
const repoName = packageJson.name || null;

// Configure Vite
export default defineConfig({
  base: repoName === null ? "/" : `/${repoName}/`,
  plugins: [react()],
});
