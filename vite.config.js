import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/login",
 plugins: [react()],
 preview: {
  host: "0.0.0.0",
  port: 8901,
  strictPort: true,
 },
 server: {
  port: 8901,
  strictPort: true,
  host: "0.0.0.0",
  // origin: "http://0.0.0.0:8901",
 },
    build: {
        chunkSizeWarningLimit: 100000,
            rollupOptions: {
                output:{
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
});
