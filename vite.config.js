import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        target: "esnext",
        cssMinify: "esbuild", // Memastikan esbuild menangani minifikasi CSS secara stabil
        sourcemap: false,
    },
});
