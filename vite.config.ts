/// <reference types="vitest/config" />
import adapter from "@hono/vite-dev-server/cloudflare";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import serverAdapter from "hono-react-router-adapter/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { getLoadContext } from "./load-context";

export default defineConfig({
	plugins: [
		cloudflareDevProxy(),
		!process.env.VITEST && reactRouter(),
		serverAdapter({
			adapter,
			getLoadContext,
			entry: "server/index.ts",
		}),
		tsconfigPaths(),
	],
	ssr: {
		noExternal: ["styled-components"],
		resolve: {
			conditions: ["workerd", "worker", "browser"],
			externalConditions: ["workerd", "worker"],
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		include: ["app/**/*.test.{js,ts,jsx,tsx}"],
		setupFiles: "./test/setup.ts",
	},
});
