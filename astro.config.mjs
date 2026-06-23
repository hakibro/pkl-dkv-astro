import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Untuk static site di Cloudflare Pages, adapter tidak diperlukan
// Cukup build dengan astro build dan deploy folder dist/
export default defineConfig({
	integrations: [tailwind()],
});
