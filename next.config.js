/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/EcoVenligFab' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/EcoVenligFab/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
