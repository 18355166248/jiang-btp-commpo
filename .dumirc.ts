import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '首页',
  },
  favicons: ['/logo.svg'],
  logo: '/logo.svg',
  alias: {
    '@': join(__dirname, 'src'),
  },
  links: [
    { rel: 'stylesheet', href: '/common.css' },
    {
      rel: 'stylesheet',
      href: '/tailwindCss.css',
    },
  ],
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/components/common' }],
  },
});
