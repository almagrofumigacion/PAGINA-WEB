import {existsSync} from 'node:fs';
import {sites} from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import {defineConfig} from 'vite';

const openAiHostingConfig = '.openai/hosting.json';

export default defineConfig({
  css: {postcss: {plugins: [tailwindcss()]}},
  plugins: [vinext(), ...(existsSync(openAiHostingConfig) ? [sites()] : [])],
});
