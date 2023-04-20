/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['intraxn-app.s3.ap-south-1.amazonaws.com'],
  }
}

module.exports = nextConfig
