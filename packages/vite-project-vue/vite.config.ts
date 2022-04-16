import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        vue(),
        federation({
            name: 'vue-app',
            filename: 'remoteEntry.js',
            remotes: {
                'react-app': 'http://127.0.0.1:5500/assets/remoteEntry.js',
            },
            // shared: ['vue'],
        }),
    ],
});
