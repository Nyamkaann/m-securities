/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'msecurities.mn'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'msecurities.mn',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig 