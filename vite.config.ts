// vite.config.ts or vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path'
import {execSync} from "node:child_process";

const commitHash = execSync('git rev-parse HEAD').toString().trim();
export default defineConfig({
    define: {
        __COMMIT_HASH__: JSON.stringify(commitHash),
    },
    base: '/ExamBuddy/', // <-- REQUIRED for GitHub Pages
    plugins: [
        react(),
        tailwindcss()
    ],
    build: {
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
})
