import {defineConfig, Plugin} from "vite";
import {resolve } from "node:path";

export default defineConfig({
    base:'/',
    build: {
        rolldownOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                products: resolve(__dirname, 'products/index.html'),
                "products/templates": resolve(__dirname, 'products/templates/index.html'),
                "products/templates/job-application-tracker": resolve(__dirname, 'products/templates/job-application-tracker/index.html'),
                company: resolve(__dirname, 'company/index.html'),
                "company/contacts": resolve(__dirname, 'company/contacts.html')
            }
        }
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    }
})


