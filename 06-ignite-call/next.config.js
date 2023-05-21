/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // allows us having a style file without creating a new route
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  // profile pic coming from Google
  images: {
    domains: ['https://lh3.googleusercontent.com/'],
  },
}

module.exports = nextConfig
