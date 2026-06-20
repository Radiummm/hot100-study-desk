import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hot100-study-desk/",
  plugins: [react()],
});
