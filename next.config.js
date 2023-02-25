/**
 * @type {import('next').NextConfig}
 */
/* eslint-disable @typescript-eslint/no-var-requires */

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false }

    return config
  },
  images: {
    domains: ['https://lh3.googleusercontent.com'],
    minimumCacheTTL: 2_630_000
  }
}

module.exports = nextConfig
