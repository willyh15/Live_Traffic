import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // Required for GitHub Pages static export
  trailingSlash: true,   // Ensures URLs end with a slash for GitHub Pages
  images: {
    unoptimized: true,   // Required if GitHub Pages doesn’t support optimized images
  },
  // Add other config options as needed
};

export default nextConfig;
