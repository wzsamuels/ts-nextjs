/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'upcity-marketplace.s3.amazonaws.com'],
  },
})

module.exports = nextConfig