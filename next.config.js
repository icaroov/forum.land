/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config.js')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = () =>
  withPWA({
    i18n,
    reactStrictMode: true,
    webpack5: true,
    webpack: config => {
      config.resolve.fallback = { fs: false }

      return config
    },
    pwa: {
      dest: 'public',
      disable: !isProd
    },
    images: {
      domains: ['https://lh3.googleusercontent.com'],
      minimumCacheTTL: 2_630_000
    }
  })

module.exports = nextConfig
