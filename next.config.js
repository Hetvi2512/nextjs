/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    styledComponents: true ,
    removeConsole: true,
  },  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gumlet.assettype.com'],
  },
}

module.exports = nextConfig
