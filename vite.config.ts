/* 이 코드는 vite 파일을 생성할 때 자체적으로 생성된 코드. 아래 Nico 코드와 달라 주석처리. 해당 내용 1basis 1.4 참고
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), react()],
  build: {
    cssMinify: true,
    ssr: false,
  },
  server: {
    port: 3000,
  },
});
*/

import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
