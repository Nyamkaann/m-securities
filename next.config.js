/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Add cross-browser compatibility settings
  swcMinify: false, // Disable SWC minification for better compatibility
  reactStrictMode: false, // Disable strict mode for better compatibility
  // Add polyfills
  webpack: (config, { isServer }) => {
    // Add polyfills for client-side only
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig 