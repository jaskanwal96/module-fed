<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import SuspenseWithErrors from './components/SuspenseWithErrors';
import ReactDOMServer from 'react-dom/server';
import { ref } from 'vue';

async function fetchImport() {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await import('react-app/ReactApp').default;
            resolve(
                ReactDOMServer.renderToString(
                    res({
                        caption: 'React Button in vue',
                    }),
                ),
            );
        } catch (err) {
            reject(err);
        }
    });
}

const data = ref(null);
data.value = await fetchImport();
console.log(data);
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <SuspenseWithErrors>
        <template #error="props">
            <p class="center error space-up">
                {{ props.error }}
            </p>
        </template>
        <template #default>
            <div class="layout-app">
                <div class="app-label">
                    <h1>home App vue based</h1>
                    # Hosting App [vue based]
                </div>
                <h1>Layout App react based</h1>
                <div class="remote-component">
                    <div class="app-label">#remote-component [REMOTE]</div>
                </div>
                <div v-html="data"></div>
            </div>
        </template>
        <template #fallback>
            <div class="space-up">Loading please wait ...</div>
        </template>
    </SuspenseWithErrors>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
