import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: "./production",
        rollupOptions: {
            input: {
                "logo-3-column-responsive-center": "logo-3-column-responsive-center.html",
                "slick-slider-multiple-control": "slick-slider-multiple-control.html",
                "slick-slider-centered-with-padding": "slick-slider-centered-with-padding.html",
                // "contact": "contact",
            }
        },
    },
    server: {
        port: "3001"
    },
    inject: {
        exclude: ['https://cdn.tailwindcss.com'],
    },
})