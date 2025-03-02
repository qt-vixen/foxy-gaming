/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Foxy Gaming',
    description: 'The official images running Foxy Gaming cloud',
    icon: '/img/logo.svg',
    listUrl: 'https://qt-vixen.github.io/foxy-gaming/',
    contactUrl: 'https://foxyacres.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/foxy-gaming/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
