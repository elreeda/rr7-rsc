import { defineConfig } from "vite";
import { vitePlugin as react } from "@react-router/dev";
import inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      appDirectory: "src",
      ssr: true,
      future: {
        unstable_singleFetch: true,
      },
      // routes(defineRoutes) {
      //   return defineRoutes((route) => {
      //     route("", "home.tsx", { index: true });
      //     route("/gallery", "gallery.tsx", { index: true });
      //     route("*", "Routes.tsx");
      //   });
      // },
    }),
    inspect(),
  ],
});
