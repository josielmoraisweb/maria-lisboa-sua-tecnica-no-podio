import type { NextConfig } from "next";

const isSitesBuild = process.env.SITES_BUILD === "true";

const nextConfig: NextConfig = {
  output: isSitesBuild ? undefined : "standalone",
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    "/*": [
      "node_modules/sharp/**/*",
      "node_modules/@img/**/*",
      "node_modules/.pnpm/sharp@*/**/*",
      "node_modules/.pnpm/@img+*/**/*",
    ],
  },
};

export default nextConfig;
