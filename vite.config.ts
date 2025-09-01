import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    })
  ],

  // Build optimization
  build: {
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries cho better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'utils': ['lucide-react']
        }
      }
    }
  },

  // Development server config
  server: {
    port: 3000,
    open: true, // Tự động mở browser
    host: true  // Allow external connections
  },

  // Path aliases (optional)
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@types': '/src/types',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils'
    }
  },

  // CSS config
  css: {
    devSourcemap: true
  },


});