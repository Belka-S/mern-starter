import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';

const arrDirent: fs.Dirent[] = fs.readdirSync('./src', {
  withFileTypes: true,
});

const dirNames: string[] = arrDirent
  .filter(el => el.isDirectory())
  .map(el => el.name);

const dirPaths = dirNames.reduce((acc, dir) => {
  const path = { [dir]: `/${dir === 'src' ? dir : 'src/' + dir}` };
  return { ...acc, ...path };
}, {});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const PORT = Number(env.VITE_FRONT_PORT) ?? 5173;

  return {
    plugins: [react()],
    resolve: {
      alias: { ...dirPaths },
    },
    server: {
      watch: { usePolling: true },
      host: true,
      strictPort: true,
      port: PORT,
      open: '/',
    },
    base: '/mern-starter',
  };
});
