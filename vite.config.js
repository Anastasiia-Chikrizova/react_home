import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

const additionalData = [
  '@import "./src/shared/styles/colors.scss";',
  '@import "./src/shared/styles/variables.scss";',
  '@import "./src/shared/styles/mixins.scss";',
];

export default defineConfig(() => {
  const mode = process.env.APP_ENV;

  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@assets': resolve(__dirname, 'src/shared/assets'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: additionalData.join(' '),
        },
      },
    },
    define: {
      __IS_DEV__: JSON.stringify(true),
    },
  };
});
