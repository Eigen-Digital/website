import {defineConfig} from "vite";
import path from "path";

export default defineConfig({
    build: {
        rolldownOptions: {
            input: {
                "templates/job-application-tracker": path.resolve(__dirname, "./src/pages/products/job-application-tracker/index.html")
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
})