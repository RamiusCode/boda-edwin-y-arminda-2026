// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: la usan las etiquetas de vista previa (WhatsApp)
  site: 'https://boda-edwin-y-arminda-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});