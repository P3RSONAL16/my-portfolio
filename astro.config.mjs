// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  site: 'https://p3rsonal16.github.io/my-portfolio/',
  base: '/my-portfolio/',
  outDir: 'dist',
});

