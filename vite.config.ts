import {defineConfig} from "vite";
import {resolve } from "node:path";

export default defineConfig({
    base:'/',
    build: {
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                products: resolve(import.meta.dirname, 'products/index.html'),
                "products/add-ons": resolve(import.meta.dirname, "products/add-ons/index.html"),
                "products/templates": resolve(import.meta.dirname, 'products/templates/index.html'),
                "products/templates/job-application-tracker": resolve(import.meta.dirname, 'products/templates/job-application-tracker/index.html'),
                company: resolve(import.meta.dirname, 'company/index.html'),
                "company/contacts": resolve(import.meta.dirname, 'company/contacts.html')
            }
        }
    },
    resolve: {
        alias: {
            "@": resolve(import.meta.dirname, "./src")
        }
    }
})


