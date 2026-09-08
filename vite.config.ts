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
                "products/add-ons/sheetX": resolve(import.meta.dirname, "products/add-ons/sheetX/index.html"),
                "products/add-ons/sheetX/eula": resolve(import.meta.dirname,"products/add-ons/sheetX/eula.html"),
                "products/add-ons/sheetX/privacy-policy": resolve(import.meta.dirname, "products/add-ons/sheetX/privacy-policy.html"),
                "products/add-ons/sheetX/terms-and-conditions": resolve(import.meta.dirname, "products/add-ons/sheetX/terms-and-conditions.html"),
                "products/templates": resolve(import.meta.dirname, 'products/templates/index.html'),
                "products/templates/eigen-job-tracker": resolve(import.meta.dirname, 'products/templates/job-application-tracker/index.html'),
                "products/templates/eigen-job-tracker/eula": resolve(import.meta.dirname, 'products/templates/job-application-tracker/eula.html'),
                "products/templates/eigen-job-tracker/privacy-policy": resolve(import.meta.dirname, 'products/templates/job-application-tracker/privacy-policy.html'),
                "products/templates/eigen-job-tracker/terms-and-conditions": resolve(import.meta.dirname, 'products/templates/job-application-tracker/terms-and-conditions.html'),
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


