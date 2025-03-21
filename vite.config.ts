import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegúrate de que la salida sea la carpeta 'dist'
  },
  base: '/',
})

/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegúrate de que la salida sea la carpeta 'dist'
  },
  base: '/', // Asegúrate de que la base sea '/'
});*/