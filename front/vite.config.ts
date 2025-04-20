import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    build: {
        outDir: "../back/build/resources/main/static",
        sourcemap: true,
    },
    server: {
        open: "/",
        proxy: {
            "/api": {
                target: "localhost:8080",
                changeOrigin: true,
                configure: (proxy) => {
                    proxy.on("proxyReq", (proxyReq, _req, _res) => {
                        proxyReq.removeHeader("origin");
                    });
                },
            },
        },
    },
});
