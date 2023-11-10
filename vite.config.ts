import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    resolve: {
      alias: {
        src: "/src",
        components: "src/components",
      },
    },
  };

  if (command !== "serve") {
    config.base = "/automotive-evolution/";
  }

  return config;
});
