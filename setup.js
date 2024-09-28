import { promises as fs } from "fs";
import path from "path";

// Get the current directory (where the script is located)
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Define the paths for the .env and .env.example files
const envFilePath = path.resolve(__dirname, ".env");
const envExampleFilePath = path.resolve(__dirname, ".env.example");

async function createEnvFile() {
  try {
    // Check if the .env file already exists
    await fs.access(envFilePath);
    console.log(".env file already exists. No action needed.");
  } catch {
    // If .env doesn't exist, check if .env.example exists
    try {
      await fs.access(envExampleFilePath);

      // Copy .env.example to .env
      await fs.copyFile(envExampleFilePath, envFilePath);
      console.log(".env file created from .env.example.");
    } catch (error) {
      console.error(".env.example file not found. Please provide one.");
    }
  }
}

// Run the function
createEnvFile();
