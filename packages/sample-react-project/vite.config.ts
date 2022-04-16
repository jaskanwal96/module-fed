import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3001,
    },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    plugins: [
        react(),
        federation({
            name: 'react-app',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactApp': './src/App.tsx',
            },
            // shared: ['vue'],
        }),
    ],
});
