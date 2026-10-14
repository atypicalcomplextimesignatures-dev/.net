// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://literature.svenja.dev',
  base: '/',
  image: {
    service: passthroughImageService(),
  },
});
