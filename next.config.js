/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'],
    unoptimized: true // Add this if you're having image optimization issues
  },
  eslint: {
    ignoreDuringBuilds: false // Set to true if you want to deploy despite warnings
  },
  typescript: {
    ignoreBuildErrors: false // Set to true if you want to deploy despite TS errors
  }
}

module.exports = nextConfig 