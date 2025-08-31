// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
    open: true,
    host: true
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
  }
});