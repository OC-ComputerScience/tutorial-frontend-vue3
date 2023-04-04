import { defineConfig } from "cypress";
import dotenv from "dotenv";
const env = dotenv.config("./.env").parsed;

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081",
    env: {
      ...env,
    },
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
