/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/EcoVenligFab' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/EcoVenligFab/' : '',
}

module.exports = nextConfig
