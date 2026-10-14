// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://magazine.svenja.dev',
  base: '/',
  image: {
    service: passthroughImageService(),
  },
});
