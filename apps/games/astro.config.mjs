// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://atypicalcomplextimesignatures.net',
  base: '/',
  image: {
    service: passthroughImageService(),
  },
});
