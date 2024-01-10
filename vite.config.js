import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: "../dist", // Specify the output directory
<<<<<<< HEAD
=======
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
>>>>>>> 1ba00b86a66c23679977b4f155086ca8685b4e20
  },
});
