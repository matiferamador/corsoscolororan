import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Aquí puedes especificar manualmente los chunks si es necesario
        manualChunks: {
          vendor: ['react', 'react-dom'], // Agrupa las dependencias comunes en un chunk
          // Puedes agregar más agrupaciones aquí
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Ajusta el límite del tamaño del chunk a 1MB (1000KB)
  },
})
